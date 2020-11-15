//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledGeneralInfo, StyledLabel, StyledInput } from './GeneralInfo.styles';

const GeneralInfo = ({ commonInfo, onChangeGeneralInfo }) => (
	<StyledGeneralInfo>
		<StyledLabel>
			Full Name
			<StyledInput
				name="name"
				type="text"
				value={commonInfo.name}
				onChange={onChangeGeneralInfo}
				autoComplete="off"
				placeholder="Enter your full name here"
			/>
		</StyledLabel>

		<StyledLabel>
			Title
			<StyledInput
				name="title"
				type="text"
				value={commonInfo.title}
				onChange={onChangeGeneralInfo}
				autoComplete="off"
				placeholder="Enter your title here"
			/>
		</StyledLabel>

		<StyledLabel>
			Email
			<StyledInput
				name="email"
				type="email"
				value={commonInfo.email}
				onChange={onChangeGeneralInfo}
				autoComplete="off"
				placeholder="Enter your email here"
			/>
		</StyledLabel>
	</StyledGeneralInfo>
);

GeneralInfo.propTypes = {
	onChangeGeneralInfo: PropTypes.func.isRequired,
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

export default GeneralInfo;
