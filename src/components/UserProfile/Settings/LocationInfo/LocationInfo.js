//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLocationInfo, StyledLabel, StyledInput } from './LocationInfo.styles';
import { StyledSelect } from './LocationInfo.styles';
//Data
import countries from 'data/countries.json';

const LocationInfo = ({ locationInfo = {}, onChangeLocationInfo }) => (
	<StyledLocationInfo>
		<StyledLabel>
			Country
			<StyledSelect name="country" value={locationInfo.country} onChange={onChangeLocationInfo}>
				{countries.map(({ name }) => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</StyledSelect>
		</StyledLabel>

		<StyledLabel>
			State/Province/Region
			<StyledInput
				type="text"
				name="region"
				autoComplete="off"
				placeholder="Type here"
				value={locationInfo.region}
				onChange={onChangeLocationInfo}
			/>
		</StyledLabel>
	</StyledLocationInfo>
);

LocationInfo.propTypes = {
	onChangeLocationInfo: PropTypes.func.isRequired,
	locationInfo: PropTypes.shape({
		region: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
	}).isRequired,
};

export default LocationInfo;
