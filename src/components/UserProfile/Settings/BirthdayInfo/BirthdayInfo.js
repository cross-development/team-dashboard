//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel, StyledSelect } from './BirthdayInfo.styles';
//Data
import months from 'data/months.json';

const BirthdayInfo = ({ value, handleChange }) => {
	return (
		<StyledBirthdayInfo>
			<StyledLabel>
				Birthday
				<div>
					<StyledSelect value={value} onChange={handleChange}>
						{[...Array(31)].map((_, idx) => (
							<option value={idx + 1}>{idx + 1}</option>
						))}
					</StyledSelect>
					<StyledSelect value={value} onChange={handleChange}>
						{months.map(({ name }) => (
							<option value={name}>{name}</option>
						))}
					</StyledSelect>
					<StyledSelect value={value} onChange={handleChange}>
						<option value="">dlksnldsg</option>
					</StyledSelect>
				</div>
			</StyledLabel>
		</StyledBirthdayInfo>
	);
};

BirthdayInfo.propTypes = {};

export default BirthdayInfo;
