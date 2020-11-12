//Core
import styled from 'styled-components';

export const StyledGeneralInfo = styled.div`
	grid-area: general;
	border-top: 3px solid #f5f7fa;
	border-bottom: 3px solid #f5f7fa;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 4rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const StyledInput = styled.input`
	display: block;
	width: 70%;
	padding: 0.3rem 0.8rem;
	color: #5b6378;
	border-radius: 50px;
	border: none;
	box-shadow: 0px 0px 2px 0px #707070;
	outline: none;

	&::placeholder {
		font: inherit;
		color: #b8bfc4;
	}

	&::-webkit-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&::-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-moz-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:-ms-input-placeholder {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	&:focus::-webkit-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus::-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-moz-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:focus:-ms-input-placeholder {
		opacity: 0;
		transition: opacity 0.3s ease;
	}
`;
