//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import GeneralInfo from './GeneralInfo';
//Styles
import { StyledContainer, StyledTitle, StyledGeneralForm } from './Settings.styles';
import { StyledLocationInfo, StyledPhoneInfo, StyledAcceptWrap } from './Settings.styles';
import { StyledBirthdayInfo } from './Settings.styles';

const Settings = props => {
	return (
		<StyledContainer>
			<StyledTitle>Edit Your Personal Settings</StyledTitle>

			<StyledGeneralForm>
				<GeneralInfo />

				<StyledBirthdayInfo></StyledBirthdayInfo>

				<StyledLocationInfo></StyledLocationInfo>

				<StyledPhoneInfo></StyledPhoneInfo>

				<StyledAcceptWrap></StyledAcceptWrap>
			</StyledGeneralForm>
		</StyledContainer>
	);
};

Settings.propTypes = {};

export default Settings;
