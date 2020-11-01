//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaClipboardCheck } from 'react-icons/fa';

export const StyledUserWrapDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 15%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
`;

export const StyledLink = styled(Link)`
	color: #5b6378;
	font-size: 16px;
	line-height: 18px;
	font-weight: 400;
	text-decoration: none;
	display: flex;
	align-items: center;
	transition: all 250ms linear;

	&:hover {
		color: #507bfc;
		text-shadow: 0px 3px 10px rgba(80, 123, 252, 0.7);
	}
`;

export const StyledRegIcon = styled(FaClipboardCheck)`
	margin-right: 1rem;
`;

export const StyledLoginIcon = styled(FaSignInAlt)`
	margin-right: 1rem;
`;
