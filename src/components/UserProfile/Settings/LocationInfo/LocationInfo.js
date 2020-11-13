//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLocationInfo, StyledLabel, StyledInput } from './LocationInfo.styles';
import { StyledSelect } from './LocationInfo.styles';
//Data
import countries from 'data/countries.json';

const LocationInfo = () => {
	return (
		<StyledLocationInfo>
			<StyledLabel>
				Country
				<StyledSelect value="" onChange="">
					{countries.map(({ name }) => (
						<option value={name}>{name}</option>
					))}
				</StyledSelect>
			</StyledLabel>

			<StyledLabel>
				State/Province/Region
				<StyledInput type="text" value="" onChange="" autoComplete="off" placeholder="Type here" />
			</StyledLabel>
		</StyledLocationInfo>
	);
};

LocationInfo.propTypes = {};

export default LocationInfo;
