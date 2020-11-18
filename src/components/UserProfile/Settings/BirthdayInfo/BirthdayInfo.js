//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel, StyledDatepicker } from './BirthdayInfo.styles';

const BirthdayInfo = ({ commonInfo, onChangeBirthdayInfo }) => (
	<StyledBirthdayInfo>
		<StyledLabel>
			Birthday
			<StyledDatepicker
				name="birthday"
				format="dd/MM/y"
				clearIcon={null}
				value={new Date(commonInfo?.birthday) || ''}
				onChange={onChangeBirthdayInfo}
			/>
		</StyledLabel>
	</StyledBirthdayInfo>
);

BirthdayInfo.propTypes = {
	onChangeBirthdayInfo: PropTypes.func.isRequired,
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

export default BirthdayInfo;
