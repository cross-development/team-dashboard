//Core
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'profileTitle profileTitle profileTitle'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'avatar avatar avatar'
		'slogan slogan slogan'
		'slogan slogan slogan'
		'slogan slogan slogan'
		'slogan slogan slogan';
	grid-area: profile;
	border-right: 3px solid #f5f7fa;
`;

export const StyledProfileWrap = styled.div`
	grid-area: avatar;
	border-top: 3px solid #f5f7fa;
	border-bottom: 3px solid #f5f7fa;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const StyledTitle = styled.h2`
	grid-area: profileTitle;
	color: #98a0a6;
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	margin: auto;
`;

export const StyledAvatarWrap = styled.div`
	width: 40%;
	height: auto;
	border-radius: 50%;
	border: 1px solid #dee1e6;
	padding: 0.4rem;
`;

export const StyledAvatar = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

export const StyledName = styled.p`
	color: #5b6378;
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
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

export const StyledSloganWrap = styled.div`
	grid-area: slogan;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

export const StyledSloganTitle = styled.h2`
	color: #5b6378;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
`;

export const StyledSlogan = styled.p`
	max-width: 80%;
	font-size: 18px;
	font-weight: 400;
	line-height: 32px;
	color: #98a0a6;
	text-align: center;
	margin: 1.5rem 0 2rem;
`;

export const StyledIconQuote = styled(FaQuoteLeft)`
	color: #507bfc;
	font-size: 22px;
`;
