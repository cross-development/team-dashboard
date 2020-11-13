//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel } from './BirthdayInfo.styles';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const BirthdayInfo = ({ value, handleChange }) => {
	return (
		<StyledBirthdayInfo>
			<StyledLabel>
				Birthday
				<select value={value} onChange={handleChange}>
					{[...Array(31)].map((_, idx) => (
						<option value={idx + 1}>{idx + 1}</option>
					))}
				</select>
				<select value={value} onChange={handleChange}>
					{months.map(item => (
						<option value={item}>{item}</option>
					))}
				</select>
				<select value={value} onChange={handleChange}>
					<option value="">dlksnldsg</option>
				</select>
			</StyledLabel>
		</StyledBirthdayInfo>
	);
};

BirthdayInfo.propTypes = {};

export default BirthdayInfo;
