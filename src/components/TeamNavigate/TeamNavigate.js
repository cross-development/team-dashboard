//Core
import React from 'react';
//Components
import TeamInfo from './TeamInfo';
import TeamControls from './TeamControls';
//Styles
import styled from 'styled-components';

const TeamNavigate = () => {
	return (
		<StyledContainer>
			<TeamInfo />

			<TeamControls />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 1.5rem 0;
	padding: 0 2.6rem;
`;

export default TeamNavigate;
