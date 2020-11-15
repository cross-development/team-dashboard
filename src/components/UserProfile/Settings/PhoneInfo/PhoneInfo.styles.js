//Core
import styled from 'styled-components';

export const StyledPhoneInfo = styled.div`
	grid-area: phone;
	border-bottom: 3px solid #f5f7fa;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 2rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 45%;
	color: #5b6378;
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
