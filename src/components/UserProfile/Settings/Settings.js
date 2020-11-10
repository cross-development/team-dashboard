//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledContainer, StyledTitle } from './Settings.styles';
import { StyledGeneralInfo, StyledBirthdayInfo } from './Settings.styles';
import { StyledLocationInfo, StyledPhoneInfo, StyledAcceptWrap } from './Settings.styles';

const Settings = props => {
	return (
		<StyledContainer>
			<StyledTitle></StyledTitle>

			<StyledGeneralInfo></StyledGeneralInfo>

			<StyledBirthdayInfo></StyledBirthdayInfo>

			<StyledLocationInfo></StyledLocationInfo>

			<StyledPhoneInfo></StyledPhoneInfo>

			<StyledAcceptWrap></StyledAcceptWrap>
		</StyledContainer>
	);
};

Settings.propTypes = {};

export default Settings;
