//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledPhoneInfo, StyledLabel, StyledInput } from './PhoneInfo.styles';

const PhoneInfo = ({ commonInfo, onChangePhoneInfo }) => (
	<StyledPhoneInfo>
		<StyledLabel>
			Postal Code
			<StyledInput
				type="text"
				name="postalCode"
				autoComplete="off"
				placeholder="Type here"
				value={commonInfo.postalCode}
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
				value={commonInfo.phoneNumber}
				onChange={onChangePhoneInfo}
			/>
		</StyledLabel>
	</StyledPhoneInfo>
);

PhoneInfo.propTypes = {
	onChangePhoneInfo: PropTypes.func.isRequired,
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

export default PhoneInfo;
