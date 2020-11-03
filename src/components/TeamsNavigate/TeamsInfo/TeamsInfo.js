//Core
import React from 'react';
//Styles
import { FaRocket } from 'react-icons/fa';
import { StyledTeamAvatar, StyledTitleWrap } from './TeamsInfo.styles';
import { StyledInfoWrap, StyledTitle, StyledTeamName } from './TeamsInfo.styles';

const TeamsInfo = () => {
	return (
		<StyledInfoWrap>
			<StyledTeamAvatar>
				<FaRocket />
			</StyledTeamAvatar>

			<StyledTitleWrap>
				<StyledTitle>Team Members</StyledTitle>
				<StyledTeamName>Rocket</StyledTeamName>
			</StyledTitleWrap>
		</StyledInfoWrap>
	);
};

export default TeamsInfo;
