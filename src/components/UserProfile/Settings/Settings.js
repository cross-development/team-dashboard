//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import GeneralInfo from './GeneralInfo';
import BirthdayInfo from './BirthdayInfo';
import LocationInfo from './LocationInfo';
import PhoneInfo from './PhoneInfo';
//Styles
import { StyledAcceptWrap, StyledButton } from './Settings.styles';
import { StyledContainer, StyledTitle, StyledSettingsContainer } from './Settings.styles';

const Settings = ({ commonInfo, onChangeCommonInfo, onChangeBirthdayInfo }) => (
	<StyledContainer>
		<StyledTitle>Edit Your Personal Settings</StyledTitle>

		<StyledSettingsContainer>
			<GeneralInfo commonInfo={commonInfo} onChangeGeneralInfo={onChangeCommonInfo} />

			<BirthdayInfo commonInfo={commonInfo} onChangeBirthdayInfo={onChangeBirthdayInfo} />

			<LocationInfo commonInfo={commonInfo} onChangeLocationInfo={onChangeCommonInfo} />

			<PhoneInfo commonInfo={commonInfo} onChangePhoneInfo={onChangeCommonInfo} />

			<StyledAcceptWrap>
				<StyledButton>Save and Update</StyledButton>
			</StyledAcceptWrap>
		</StyledSettingsContainer>
	</StyledContainer>
);

Settings.propTypes = {
	onChangeCommonInfo: PropTypes.func.isRequired,
	onChangeBirthdayInfo: PropTypes.func.isRequired,
	commonInfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		region: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
		postalCode: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};

export default Settings;
