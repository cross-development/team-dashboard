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
	background-color: ${({ isAccepted }) => (isAccepted ? '#507bfc' : 'transparent')};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28px;
	color: ${({ isAccepted }) => (isAccepted ? '#ffffff' : '#98a0a6')};
	cursor: pointer;
	box-shadow: ${({ isAccepted }) =>
		isAccepted ? '0px 0px 20px 5px rgba(80, 123, 252, 0.8)' : '0px 0px 2px 0px #707070'};
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
	border: none;
	width: 100%;
	outline: 0;
	text-align: center;

	&::placeholder {
		color: #b8bfc4;
		font-size: 14px;
		text-align: center;
	}
`;

export const StyledButton = styled.button`
	background-color: #507bfc;
	border: none;
	color: #fff;
	border-radius: 100px;
	padding: 12px 0;
	font-size: 14px;
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

export const StyledFileInput = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const StyledFileLabel = styled.label`
	max-width: 80%;
	cursor: pointer;
	/* overflow: hidden; */
	border-radius: 50px;
	margin-bottom: 1rem;
`;
