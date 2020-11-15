//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCardItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	height: 300px;
	border-radius: 6px;
	background-color: #fff;
	transition: all 250ms linear;

	&:hover {
		box-shadow: 0px 0px 2px 0px #707070;
	}
`;

export const StyledLikeBtn = styled.button`
	margin-left: auto;
	margin-right: 0;
	background-color: transparent;
	border: none;
	font-size: 18px;
	outline: none;
	overflow: visible;
	cursor: pointer;

	& svg {
		transition: all 250ms linear;
		color: ${({ isLiked }) => (isLiked ? '#FA5F7D' : '#fff')};
		filter: ${({ isLiked }) =>
			isLiked
				? 'drop-shadow(0px 2px 4px rgba(250, 95, 125, 1))'
				: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 1))'};

		&:hover {
			filter: ${({ isLiked }) =>
				isLiked
					? 'drop-shadow(0px 1px 6px rgba(250, 95, 125, 1))'
					: 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 1))'};
		}
	}
`;

export const StyledImgWrap = styled.div`
	width: 100px;
	height: 100px;
	margin-bottom: 1rem;
`;

export const StyledAvatar = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 50px;
	box-shadow: 0px 0px 2px 0px #707070;
`;

export const StyledName = styled.p`
	font-size: 18px;
	color: #1b2437;
	line-height: 22px;
	font-weight: 400;
`;

export const StyledEmail = styled.p`
	font-size: 14px;
	color: #98a0a6;
	line-height: 18px;
	font-weight: 400;
`;

export const StyledControlWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border: none;
	background-color: transparent;
	overflow: visible;
	margin-top: 0.5rem;
`;

export const StyledLink = styled(Link)`
	display: flex;
	font-size: 14px;
	align-items: center;
	justify-content: space-evenly;
	background-color: rgba(80, 123, 252, 0);
	border: none;
	color: #98a0a6;
	border-radius: 100px;
	padding: 12px 2px;
	cursor: pointer;
	transition: all 300ms linear;
	outline: none;
	width: 45%;
	margin: 0 auto;
	text-decoration: none;

	&:hover {
		color: #fff;
		background-color: #507bfc;
		box-shadow: 0 10px 20px 0 rgba(80, 123, 252, 0.8);
	}
`;
