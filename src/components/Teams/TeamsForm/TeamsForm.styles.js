//Core
import styled from 'styled-components';

export const StyledTitle = styled.h1`
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 1rem;
	color: #98a0a6;
	text-align: center;
`;

export const StylesForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2rem;
	width: 100%;
	height: 300px;
	border-radius: 6px;
	background-color: #fff;
`;

export const StyledImgWrap = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50px;
	box-shadow: 0px 0px 2px 0px #707070;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28px;
	color: #98a0a6;
	cursor: pointer;
`;

export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 10px;

	&:last-of-type {
		margin-bottom: 20px;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	/* padding: 6px 20px; */
	/* margin-top: 0.2rem; */
	border: none;
	/* border-bottom: 2px solid rgba(80, 123, 252, 0.3); */
	width: 100%;
	outline: 0;
	text-align: center;
	/* border-radius: 100px; */

	&::placeholder {
		color: #b8bfc4;
		font-size: 14px;
		text-align: center;
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

export const StyledButton = styled.button`
	background-color: #507bfc;
	border: none;
	color: #fff;
	border-radius: 100px;
	padding: 12px 0;
	cursor: pointer;
	transition: all 250ms linear;
	box-shadow: 0 0 8px #507bfc;
	outline: none;
	width: 70%;
	margin: 0 auto;

	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(80, 123, 252, 0.8);
	}
`;
