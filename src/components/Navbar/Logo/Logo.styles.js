//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled.div`
	width: 10%;
`;

export const StyledLink = styled(Link)`
	font-size: 28px;
	font-weight: 400;
	text-decoration: none;
	color: #5b6378;
	transition: all 250ms linear;

	&:hover {
		color: #507bfc;
		text-shadow: 0px 3px 10px rgba(80, 123, 252, 0.7);
	}
`;

export const StyledSpan = styled.span`
	color: #507bfc;
`;
