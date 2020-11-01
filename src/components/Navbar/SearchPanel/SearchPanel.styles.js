//Core
import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	overflow: hidden;
	padding: 0 50px;
`;

export const StyledSearchBar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background-color: #fff;
	border-radius: 6px;
	overflow: hidden;
	border: 1px solid #eaeaea;
`;

export const StyledBtn = styled.button`
	display: inline-block;
	width: 48px;
	height: 38px;
	border: 0;
	opacity: 0.4;
	transition: opacity 250ms linear;
	cursor: pointer;
	outline: none;

	&:hover {
		opacity: 0.8;
	}
`;

export const StyledLabel = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	clip-path: inset(50%);
	border: 0;
`;

export const StyledInput = styled.input`
	display: inline-block;
	width: 100%;
	height: 38px;
	font: inherit;
	font-size: 14px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	background-color: rgba(250, 250, 250, 0.3);

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
