import React from 'react';
import { Character } from '../utils/interfaces';
import styled from 'styled-components';

const ItemWrapper = styled.li`
	display: flex;
	justify-content: space-between;
	inline-size: 100%;
	block-size: 5rem;
	border: 0.125rem solid;
	font-size: 1.5rem;
	padding: 0.25rem;
	border-radius: 0.5rem;
	transition: 0.1s;
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;

const Image = styled.img`
	block-size: 100%;
	border-radius: 0.5rem;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

interface Props {
	openPopup: (arg0: number) => void;
}

const Item: React.FC<Character & Props> = ({
	id,
	name,
	gender,
	image,
	openPopup,
}) => {
	return (
		<ItemWrapper
			onClick={() => {
				openPopup(id);
			}}
		>
			<Image
				src={image}
				alt='character'
			/>
			<Info>
				<span>{name}</span>
				<span>{gender}</span>
			</Info>
		</ItemWrapper>
	);
};

export default Item;
