//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'title title title'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links'
		'links links links';
	grid-area: social;
	border-left: 3px solid #f5f7fa;
	height: 100%;
`;

export const StyledTitle = styled.h2`
	grid-area: title;
`;

export const StyledSocialLinks = styled.div`
	grid-area: links;
	border-top: 3px solid #f5f7fa;
`;
