import React from 'react';
import styled from 'styled-components';
import { SortingValue } from '../utils/interfaces';

const Selector = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	inline-size: 100%;
	padding: 0.25rem;
`;

const Screen = styled.span`
	font-size: 1.5rem;
	margin-inline: 0.5rem;
`;

const Button = styled.button`
	font-size: 1.5em;
	background: #0000;
	border: none;
	color: var(--accent-color);
	cursor: pointer;
	padding-inline: 0.25rem;
	transition: 0.1s;

	&:hover {
		opacity: 0.75;
	}
`;

const Select = styled.select`
	background: #0000;
	inline-size: 7rem;
	font-family: Montserrat;
	border: 0.125rem solid var(--accent-color);
	color: var(--accent-color);
	font-size: 1rem;
	padding: 0.25rem;
	border-radius: 0.5rem;
	transition: 0.1s;
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;

const Filler = styled.div`
	inline-size: 7rem;
`;

interface Props {
	withSelector?: boolean;
	sortingValue: SortingValue;
	setSortingValue: (arg0: SortingValue) => void;
	currentPage: number;
	maxPages: number;
	setCurrentPage: (arg0: (arg0: number) => number) => void;
}

const PageSelector: React.FC<Props> = ({
	withSelector,
	sortingValue,
	setSortingValue,
	currentPage,
	maxPages,
	setCurrentPage,
}) => {
	const changePage = (flag: boolean) => {
		setCurrentPage((prevPage: number) => {
			const newPage = prevPage + (flag ? 1 : -1);

			return newPage <= maxPages && newPage >= 1 ? newPage : prevPage;
		});
	};

	return (
		<Selector>
			<Filler></Filler>
			<div>
				<Button onClick={() => changePage(false)}>&#60;</Button>
				<Screen>{currentPage}</Screen>
				<Button onClick={() => changePage(true)}>&#62;</Button>
			</div>
			{withSelector ? (
				<Select
					value={sortingValue}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						setSortingValue(event.target.value as SortingValue);
					}}
				>
					<option value='none'></option>
					<option value='name'>Name</option>
					<option value='status'>Status</option>
					<option value='type'>Type</option>
					<option value='species'>Species</option>
					<option value='gender'>Gender</option>
				</Select>
			) : (
				<Filler></Filler>
			)}
		</Selector>
	);
};

export default PageSelector;
