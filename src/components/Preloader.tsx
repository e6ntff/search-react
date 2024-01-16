import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
	block-size: 3rem;
	inline-size: 3em;
	border-radius: 100%;
	border: .25rem solid #0000;
	border-top-color: var(--accent-color);
	animation: spin 1s infinite linear;

	@keyframes spin {
		from {
			rotate: 0deg;
		}

		to {
			rotate: 360deg;
		}
	}
`

const Preloader: React.FC = () => <Spinner />;

export default Preloader;
