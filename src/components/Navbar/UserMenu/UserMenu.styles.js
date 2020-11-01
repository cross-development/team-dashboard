//Core
import styled from 'styled-components';

export const StylesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 15%;
`;

export const StyledImg = styled.img`
	width: 40px;
	height: 40px;
	display: block;
	border-radius: 50px;
`;

export const StyledName = styled.p`
	color: #98a0a6;
	font-size: 18px;
	line-height: 18px;
	font-weight: 400;
`;

export const StyledDropdown = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #98a0a6;
	transition: all 250ms linear;

	&:hover {
		transform: scale(1.2);
		color: #507bfc;
	}
`;
