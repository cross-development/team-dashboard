//Core
import styled from 'styled-components';

export const StyledH1 = styled.h1`
	font-size: 48px;
	font-weight: 300;
	margin-bottom: 2rem;
`;

export const StyledSpan = styled.span`
	color: #507bfc;
`;

export const StylesForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 3rem auto auto;
	padding: 20px 14px;
	width: 420px;
	border: none;
	border-radius: 4px;
`;

export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 30px;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	padding: 6px 20px;
	margin-top: 0.2rem;
	border: none;
	border-bottom: 2px solid rgba(80, 123, 252, 0.3);
	width: 100%;
	outline: 0;
	border-radius: 100px;
`;

export const StyledButton = styled.button`
	background-color: #507bfc;
	border: none;
	color: #fff;
	border-radius: 100px;
	padding: 12px 0;
	cursor: pointer;
	transition: all 250ms linear;
	box-shadow: 0 0 14px #507bfc;
	outline: none;
	width: 40%;
	margin-left: auto;
	margin-right: 0;
	text-transform: uppercase;

	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(80, 123, 252, 0.8);
	}
`;
