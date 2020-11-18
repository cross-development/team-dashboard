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
				autoComplete="off"
				onChange={onChangeGeneralInfo}
				value={commonInfo?.name || ''}
				placeholder="Enter your full name here"
			/>
		</StyledLabel>

		<StyledLabel>
			Title
			<StyledInput
				name="title"
				type="text"
				autoComplete="off"
				onChange={onChangeGeneralInfo}
				value={commonInfo?.title || ''}
				placeholder="Enter your title here"
			/>
		</StyledLabel>

		<StyledLabel>
			Email
			<StyledInput
				name="email"
				type="email"
				autoComplete="off"
				onChange={onChangeGeneralInfo}
				value={commonInfo?.email || ''}
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
		birthday: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
		postalCode: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};

export default GeneralInfo;
