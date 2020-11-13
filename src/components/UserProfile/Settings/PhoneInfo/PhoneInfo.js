//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledPhoneInfo, StyledLabel, StyledInput } from './PhoneInfo.styles';

const PhoneInfo = () => {
	return (
		<StyledPhoneInfo>
			<StyledLabel>
				Postal Code
				<StyledInput type="text" value="" onChange="" autoComplete="off" placeholder="Type here" />
			</StyledLabel>

			<StyledLabel>
				Phone Number
				<StyledInput type="text" value="" onChange="" autoComplete="off" placeholder="Type here" />
			</StyledLabel>
		</StyledPhoneInfo>
	);
};

PhoneInfo.propTypes = {};

export default PhoneInfo;
