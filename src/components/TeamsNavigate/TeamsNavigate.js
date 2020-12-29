//Core
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import TeamsInfo from './TeamsInfo';
import TeamsControls from './TeamsControls';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styled from 'styled-components';

const TeamsNavigate = () => {
	const { pathname } = useLocation();
	const { teams = [] } = useSelector(state => state.teams);

	const teamId = pathname.split('/')[2];

	const teamInfo = useMemo(() => teams.find(team => team.teamId === teamId), [teams, teamId]);

	return (
		<StyledContainer>
			{teamId && <TeamsInfo title={teamInfo.name} avatar={teamInfo.avatar} />}

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
