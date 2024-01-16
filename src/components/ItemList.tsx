import React from 'react';
import styled from 'styled-components';
import { Character, Data } from '../utils/interfaces';
import Item from './Item';

const List = styled.ul`
	inline-size: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	text-align: right;
`;

interface Props {
	charactersList: Data | null;
	setIsPopupVisible: (arg0: boolean) => void;
	setCharacterById: (arg0: number) => void;
}

const ItemList: React.FC<Props> = ({
	charactersList,
	setIsPopupVisible,
	setCharacterById,
}) => {
	const openPopup = (id: number) => {
		setCharacterById(id);
		setIsPopupVisible(true);
	};

	return (
		<List>
			{charactersList?.results.map((character: Character) => (
				<Item
					key={character.id}
					id={character.id}
					name={character.name}
					type={character.type}
					status={character.status}
					species={character.species}
					gender={character.gender}
					image={character.image}
					openPopup={openPopup}
				/>
			))}
		</List>
	);
};

export default ItemList;
