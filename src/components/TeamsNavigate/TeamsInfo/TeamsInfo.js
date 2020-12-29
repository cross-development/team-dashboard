//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledTeamAvatar, StyledTitleWrap, StyledAvatarImg } from './TeamsInfo.styles';
import { StyledInfoWrap, StyledTitle, StyledTeamName } from './TeamsInfo.styles';

const TeamsInfo = ({ title, avatar }) => (
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

TeamsInfo.propTypes = {
	title: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
};

export default TeamsInfo;
