//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import GeneralInfo from './GeneralInfo';
import BirthdayInfo from './BirthdayInfo';
import LocationInfo from './LocationInfo';
import PhoneInfo from './PhoneInfo';
//Styles
import { StyledContainer, StyledTitle, StyledGeneralForm } from './Settings.styles';
import { StyledAcceptWrap, StyledButton } from './Settings.styles';

const Settings = () => {
	return (
		<StyledContainer>
			<StyledTitle>Edit Your Personal Settings</StyledTitle>

			<StyledGeneralForm>
				<GeneralInfo />

				<BirthdayInfo />

				<LocationInfo />

				<PhoneInfo />

				<StyledAcceptWrap>
					<StyledButton>Update information</StyledButton>
				</StyledAcceptWrap>
			</StyledGeneralForm>
		</StyledContainer>
	);
};

Settings.propTypes = {};

export default Settings;
