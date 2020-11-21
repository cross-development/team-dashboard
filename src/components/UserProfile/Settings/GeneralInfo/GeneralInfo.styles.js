//Core
import styled from 'styled-components';

export const StyledGeneralInfo = styled.div`
	grid-area: general;
	border-top: 3px solid #f5f7fa;
	border-bottom: 3px solid #f5f7fa;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: #5b6378;
`;

export const StyledInput = styled.input`
	display: block;
	width: 70%;
	padding: 0.3rem 0.8rem;
	color: #5b6378;
	border-radius: 50px;
	border: none;
	box-shadow: 0px 0px 2px 0px #707070;
	outline: none;
`;

export const StyledRadioWrap = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: 0px 0px 2px 0px #707070;
	padding: 0.3rem 0.8rem;
	border-radius: 50px;
`;
