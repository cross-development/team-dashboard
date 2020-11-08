//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledControlWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 18%;
	border: 2px solid #dee1e6;
	border-radius: 100px;
	background-color: transparent;
	overflow: visible;
	margin: 0 0 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
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
	width: 55%;
	text-decoration: none;

	&.active {
		color: #fff;
		background-color: #507bfc;
		box-shadow: 0 10px 20px 0 rgba(80, 123, 252, 0.8);
	}
`;
