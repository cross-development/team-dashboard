//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'title title title'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links';
	grid-area: social;
	border-left: 3px solid #f5f7fa;
	height: 100%;
`;

export const StyledTitle = styled.h2`
	grid-area: title;
	color: #98a0a6;
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	margin: auto;
`;

export const StyledSocialLinks = styled.div`
	grid-area: links;
	border-top: 3px solid #f5f7fa;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1.5rem 2rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	color: #5b6378;
	padding-bottom: 1.5rem;
`;

export const StyledInput = styled.input`
	display: block;
	width: 100%;
	padding: 0.3rem 0.8rem;
	color: #5b6378;
	border-radius: 50px;
	border: none;
	box-shadow: 0px 0px 2px 0px #707070;
	outline: none;
	margin: 1rem 0 0;

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
