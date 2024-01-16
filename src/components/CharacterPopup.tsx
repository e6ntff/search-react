import React from 'react';
import styled from 'styled-components';
import { Character } from '../utils/interfaces';

const Wrapper = styled.div<{ visible: boolean }>`
	position: fixed;
	background: ${({ visible }) => (visible ? '#000c' : '#0000')};
	pointer-events: ${({ visible }) => (visible ? 'unset' : 'none')};
	inset: 0;
	inline-size: 100%;
	block-size: 100%;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	transition: 0.15s;
`;

const Popup = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: end;
	position: relative;
	inline-size: ${({ visible }) => (visible ? 'min(100%, 35rem)' : '0')};
	overflow: hidden;
	block-size: 20rem;
	border-style: solid;
	border-width: ${({ visible }) => (visible ? '.125rem' : '0')};
	font-size: 1.5rem;
	gap: .5rem;
	text-align: right;
	padding: ${({ visible }) => (visible ? '1rem' : '0')};
	border-radius: 0.5rem;
	animation: ${({ visible }) => (visible ? 'open' : 'close')} 0.15s;

	@media (width < 700px) {
		flex-direction: column;
		text-align: left;
		align-items: start;
	}

	@keyframes open {
		0% {
			inline-size: 0;
			block-size: 0;
			border-width: 0;
		}
		50% {
			inline-size: min(100%, 35rem);
			block-size: 0;
		}
		100% {
			inline-size: min(100%, 35rem);
			block-size: 20rem;
			border-width: 0.125rem;
		}
	}

	@keyframes close {
		0% {
			inline-size: min(100%, 35rem);
			block-size: 20rem;
			border-width: 0.125rem;
		}
		50% {
			inline-size: min(100%, 35rem);
			block-size: 0;
		}
		100% {
			inline-size: 0;
			block-size: 0;
			border-width: 0;
		}
	}
`;

const Close = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 2rem;
	padding-inline: 0.5rem;
	color: var(--accent-color);
	background: #0000;
	border: 0;
	cursor: pointer;
`;

const Image = styled.img`
	block-size: 100%;
	border-radius: 0.5rem;

	@media (width < 700px) {
		block-size: 50%;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
`;

const Element = styled.span`
	font-size: 1.5rem;
`;

interface Props {
	currentCharacter: Character | null;
	isPopupVisible: boolean;
	setIsPopupVisible: (arg0: boolean) => void;
}

const CharacterPopup: React.FC<Props> = ({
	currentCharacter,
	isPopupVisible,
	setIsPopupVisible,
}) => {
	const { name, status, type, species, gender, image } = currentCharacter || {};

	const closePopup = () => {
		setIsPopupVisible(false);
	};

	return (
		<Wrapper visible={isPopupVisible}>
			<Popup visible={isPopupVisible}>
				<Close onClick={closePopup}>✕</Close>
				<Image
					src={image}
					alt='character'
				/>
				<Info>
					<Element>Name: {name}</Element>
					<Element>Status: {status}</Element>
					<Element>Type: {type}</Element>
					<Element>Species: {species}</Element>
					<Element>Gender: {gender}</Element>
				</Info>
			</Popup>
		</Wrapper>
	);
};

export default CharacterPopup;
