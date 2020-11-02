//Core
import React from 'react';
//Styles
import { FaRocket } from 'react-icons/fa';
import { StyledTeamAvatar, StyledTitleWrap } from './TeamInfo.styles';
import { StyledInfoWrap, StyledTitle, StyledTeamName } from './TeamInfo.styles';

const TeamInfo = () => {
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

export default TeamInfo;
