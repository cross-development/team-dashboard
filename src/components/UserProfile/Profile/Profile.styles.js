//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'avatar avatar avatar'
		'avatar avatar avatar'
		'slogan slogan slogan';
	grid-area: profile;
	border-right: 3px solid #f5f7fa;
`;

export const StyledProfileWrap = styled.div`
	grid-area: avatar;
	border-bottom: 3px solid #f5f7fa;
`;

export const StyledSloganWrap = styled.div`
	grid-area: slogan;
`;
