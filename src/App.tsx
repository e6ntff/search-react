import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #08ecf3;
    --accent-color: #3b8ac4;
    --main-font: Montserrat;
  }

  body {
    background: var(--main-color);
    color: var(--accent-color);
    font-family: var(--main-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Wrapper = styled.div`
	inline-size: min(100%, 35rem);
`;

const App: React.FC = () => {
	const [currentPrompt, setCurrentPrompt] = useState<string>('');

	return (
		<Wrapper>
			<GlobalStyle />
			<SearchBar setCurrentPrompt={setCurrentPrompt} />
			<ItemList currentPrompt={currentPrompt} />
		</Wrapper>
	);
};

export default App;
