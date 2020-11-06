//Core
import styled from 'styled-components';

export const StyledInfoWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 13%;
`;

export const StyledTeamAvatar = styled.div`
	display: flex;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	background-color: #507bfc;
	border: none;
	color: #ffffff;
	border-radius: 3px;
	cursor: pointer;
	transition: all 300ms linear;
	width: 40px;
	height: 40px;
	box-shadow: 0 0 8px #507bfc;
	margin-right: 1rem;

	&:hover {
		box-shadow: 0 10px 20px 0 rgba(80, 123, 252, 0.8);
	}
`;

export const StyledTitleWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`;

export const StyledTitle = styled.h2`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	color: #94969a;
`;

export const StyledTeamName = styled.p`
	font-size: 18px;
	line-height: 24px;
	color: #1b2437;
	font-weight: 400;
`;
