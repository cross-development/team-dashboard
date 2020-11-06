//Core
import React from 'react';
//Components
import TeamsInfo from './TeamsInfo';
import TeamsControls from './TeamsControls';
//Styles
import styled from 'styled-components';

const TeamsNavigate = () => {
	return (
		<StyledContainer>
			<TeamsInfo />

			<TeamsControls />
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

export default TeamsNavigate;
