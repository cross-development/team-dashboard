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

const Settings = ({ commonInfo = {}, onChangeCommonInfo, onChangeBirthdayInfo }) => {
	const { birthday, email, gender, name, country, region, phoneNumber, postalCode } = commonInfo;

	const generalInfo = { email, gender, name };
	const locationInfo = { country, region };
	const phoneInfo = { phoneNumber, postalCode };

	const userBirthday = birthday ? new Date(birthday) : '';

	return (
		<StyledContainer>
			<StyledTitle>Edit Your Personal Settings</StyledTitle>

			<StyledSettingsContainer>
				<GeneralInfo generalInfo={generalInfo} onChangeGeneralInfo={onChangeCommonInfo} />

				<BirthdayInfo birthdayInfo={userBirthday} onChangeBirthdayInfo={onChangeBirthdayInfo} />

				<LocationInfo locationInfo={locationInfo} onChangeLocationInfo={onChangeCommonInfo} />

				<PhoneInfo phoneInfo={phoneInfo} onChangePhoneInfo={onChangeCommonInfo} />

				<StyledAcceptWrap>
					<StyledButton>Save and Update</StyledButton>
				</StyledAcceptWrap>
			</StyledSettingsContainer>
		</StyledContainer>
	);
};

Settings.propTypes = {
	onChangeCommonInfo: PropTypes.func.isRequired,
	onChangeBirthdayInfo: PropTypes.func.isRequired,
	commonInfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		region: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
		postalCode: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};

export default Settings;
