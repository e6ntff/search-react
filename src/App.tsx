import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import getData from './utils/getData';
import { Character, Data, SortingValue } from './utils/interfaces';
import search from './utils/search';
import useDebounce from './hooks/useDebounce';
import Preloader from './components/Preloader';
import PageSelector from './components/PageSelector';
import sortBy from './utils/sortBy';
import CharacterPopup from './components/CharacterPopup';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #08ecf3;
    --accent-color: #3b8ac4;
    --main-font: Montserrat;
  }

  #root {
    block-size: 100%;
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--main-color);
    color: var(--accent-color);
    font-family: var(--main-font);
    padding: 1rem;
  }
`;

const Wrapper = styled.div`
	inline-size: min(100%, 35rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
`;

const App: React.FC = () => {
	const [currentPrompt, setCurrentPrompt] = useState<string>('');
	const [charactersList, setCharactersList] = useState<Data | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [maxPages, setMaxPages] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [sortingValue, setSortingValue] = useState<SortingValue>('none');
	const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
	const [currentCharacter, setCurrentCharacter] = useState<Character | null>(
		null
	);

	const debouncedPrompt = useDebounce(currentPrompt, 500);

	const setCharacterById = (id: number) => {
		setCurrentCharacter(
			charactersList?.results.find(
				(character: Character) => character.id === id
			) || null
		);
	};

	useEffect(() => {
		setIsLoading(true);
		getData(currentPage).then((data: Data) => {
			setMaxPages(data.info.pages);
			setIsLoading(false);
			setCharactersList(sortBy(search(data, debouncedPrompt), sortingValue));
		});
	}, [currentPage, debouncedPrompt, sortingValue]);

	return (
		<Wrapper>
			<GlobalStyle />
			<CharacterPopup
				isPopupVisible={isPopupVisible}
				currentCharacter={currentCharacter}
				setIsPopupVisible={setIsPopupVisible}
			/>
			<SearchBar setCurrentPrompt={setCurrentPrompt} />
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<PageSelector
						withSelector={true}
						sortingValue={sortingValue}
						setSortingValue={setSortingValue}
						currentPage={currentPage}
						maxPages={maxPages}
						setCurrentPage={setCurrentPage}
					/>
					<ItemList
						charactersList={charactersList}
						setIsPopupVisible={setIsPopupVisible}
						setCharacterById={setCharacterById}
					/>
					{charactersList?.results.length || true ? (
						<PageSelector
							sortingValue={sortingValue}
							setSortingValue={setSortingValue}
							currentPage={currentPage}
							maxPages={maxPages}
							setCurrentPage={setCurrentPage}
						/>
					) : (
						''
					)}
				</>
			)}
		</Wrapper>
	);
};

export default App;
