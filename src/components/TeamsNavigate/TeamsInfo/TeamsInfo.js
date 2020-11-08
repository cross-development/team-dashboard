//Core
import React from 'react';
//Styles
import { StyledTeamAvatar, StyledTitleWrap, StyledAvatarImg } from './TeamsInfo.styles';
import { StyledInfoWrap, StyledTitle, StyledTeamName } from './TeamsInfo.styles';

const TeamsInfo = ({ title, avatar }) => {
	return (
		<StyledInfoWrap>
			<StyledTeamAvatar>
				<StyledAvatarImg src={avatar} />
			</StyledTeamAvatar>

			<StyledTitleWrap>
				<StyledTitle>Team Members</StyledTitle>
				<StyledTeamName>{title}</StyledTeamName>
			</StyledTitleWrap>
		</StyledInfoWrap>
	);
};

export default TeamsInfo;
