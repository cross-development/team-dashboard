//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'title title title'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap'
		'linksWrap linksWrap linksWrap';
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

export const StyledSocialLinksWrap = styled.div`
	border-top: 3px solid #f5f7fa;
	padding: 1.5rem 2rem;
	grid-area: linksWrap;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const StyledLabel = styled.label`
	width: 100%;
	color: #5b6378;

	&:not(:last-child) {
		padding-bottom: 1.5rem;
	}
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
	margin: 0.8rem 0 0;
`;

export const StyledUpdateWrap = styled.div`
	grid-area: socialLinkBtn;
	display: flex;
	justify-content: center;
	align-items: center;
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

	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(80, 123, 252, 0.8);
	}
`;
