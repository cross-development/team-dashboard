//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLocationInfo, StyledLabel, StyledInput } from './LocationInfo.styles';
import { StyledSelect } from './LocationInfo.styles';
//Data
import countries from 'data/countries.json';

const LocationInfo = ({ commonInfo, onChangeLocationInfo }) => (
	<StyledLocationInfo>
		<StyledLabel>
			Country
			<StyledSelect name="country" value={commonInfo.country} onChange={onChangeLocationInfo}>
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
				value={commonInfo.region}
				onChange={onChangeLocationInfo}
			/>
		</StyledLabel>
	</StyledLocationInfo>
);

LocationInfo.propTypes = {
	onChangeLocationInfo: PropTypes.func.isRequired,
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

export default LocationInfo;
