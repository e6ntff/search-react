import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Bar = styled.input`
	inline-size: 100%;
	border: 0.125rem solid var(--accent-color);
	color: var(--accent-color);
	font-family: Montserrat;
	font-size: 1.5rem;
	padding: 0.25rem;
	border-radius: 0.5rem;
	background: #0000;

	&:focus {
		outline: solid var(--accent-color);
	}
`;

interface Props {
	setCurrentPrompt: (arg0: string) => void;
}

const SearchBar: React.FC<Props> = ({ setCurrentPrompt }) => {
	const setPrompt = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setCurrentPrompt(value);
	};

	return (
		<Bar
			type='text'
			maxLength={36}
			onInput={setPrompt}
		/>
	);
};

export default SearchBar;
