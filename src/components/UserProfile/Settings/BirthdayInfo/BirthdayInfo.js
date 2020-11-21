//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel, StyledDatepicker } from './BirthdayInfo.styles';

const BirthdayInfo = ({ birthdayInfo, onChangeBirthdayInfo }) => (
	<StyledBirthdayInfo>
		<StyledLabel>
			Birthday
			<StyledDatepicker
				name="birthday"
				format="dd/MM/y"
				clearIcon={null}
				value={birthdayInfo}
				onChange={onChangeBirthdayInfo}
			/>
		</StyledLabel>
	</StyledBirthdayInfo>
);

BirthdayInfo.propTypes = {
	onChangeBirthdayInfo: PropTypes.func.isRequired,
	birthdayInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default BirthdayInfo;
