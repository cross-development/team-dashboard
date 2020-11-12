//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledGeneralInfo, StyledLabel, StyledInput } from './GeneralInfo.styles';

const GeneralInfo = () => (
	<StyledGeneralInfo>
		<StyledLabel>
			Full Name
			<StyledInput
				type="text"
				value=""
				onChange=""
				autoComplete="off"
				placeholder="Enter your full name here"
			/>
		</StyledLabel>

		<StyledLabel>
			Title
			<StyledInput
				type="text"
				value=""
				onChange=""
				autoComplete="off"
				placeholder="Enter your title here"
			/>
		</StyledLabel>

		<StyledLabel>
			Email
			<StyledInput
				type="email"
				value=""
				onChange=""
				autoComplete="off"
				placeholder="Enter your email here"
			/>
		</StyledLabel>
	</StyledGeneralInfo>
);

GeneralInfo.propTypes = {};

export default GeneralInfo;
