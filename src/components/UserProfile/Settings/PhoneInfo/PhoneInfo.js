//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledPhoneInfo, StyledLabel, StyledInput } from './PhoneInfo.styles';

const PhoneInfo = ({ phoneInfo = {}, onChangePhoneInfo }) => (
	<StyledPhoneInfo>
		<StyledLabel>
			Postal Code
			<StyledInput
				type="text"
				name="postalCode"
				autoComplete="off"
				placeholder="Type here"
				value={phoneInfo.postalCode}
				onChange={onChangePhoneInfo}
			/>
		</StyledLabel>

		<StyledLabel>
			Phone Number
			<StyledInput
				type="text"
				name="phoneNumber"
				autoComplete="off"
				placeholder="Type here"
				value={phoneInfo.phoneNumber}
				onChange={onChangePhoneInfo}
			/>
		</StyledLabel>
	</StyledPhoneInfo>
);

PhoneInfo.propTypes = {
	onChangePhoneInfo: PropTypes.func.isRequired,
	phoneInfo: PropTypes.shape({
		postalCode: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};

export default PhoneInfo;
