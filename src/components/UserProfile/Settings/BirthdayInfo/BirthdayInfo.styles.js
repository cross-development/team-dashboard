//Core
import styled from 'styled-components';

export const StyledBirthdayInfo = styled.div`
	grid-area: birthday;
	border-bottom: 3px solid #f5f7fa;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	color: #5b6378;

	& div {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const StyledSelect = styled.select`
	display: block;
	/* width: 30%; */
	padding: 0.3rem 0.8rem;
	color: #5b6378;
	border-radius: 50px;
	border: none;
	box-shadow: 0px 0px 2px 0px #707070;
	outline: none;
	margin: 1rem 0 0;
`;
