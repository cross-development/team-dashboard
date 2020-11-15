//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel, StyledDatepicker } from './BirthdayInfo.styles';
//Data
// import months from 'data/months.json';

const BirthdayInfo = ({ commonInfo, onChangeBirthdayInfo }) => (
	<StyledBirthdayInfo>
		<StyledLabel>
			Birthday
			<StyledDatepicker
				format="dd/MM/y"
				name="birthday"
				clearIcon={null}
				value={commonInfo.birthday}
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
		birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
		postalCode: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};

export default BirthdayInfo;

// <StyledSelect name="bdDay" value={commonInfo.bdDay} onChange={onChangeGeneralInfo}>
// {[...Array(31)].map((_, idx) => (
// 	<option value={idx + 1}>{idx + 1}</option>
// ))}
// </StyledSelect>

// <StyledSelect name="bdMonth" value={commonInfo.bdMonth} onChange={onChangeGeneralInfo}>
// {months.map(({ name }) => (
// 	<option value={name}>{name}</option>
// ))}
// </StyledSelect>

// <StyledSelect name="bdYear" value={commonInfo.bdYear} onChange={onChangeGeneralInfo}>
// <option value="">dlksnldsg</option>
// </StyledSelect>

// {
// 	/* <div> */
// }
// {
// 	/* </div> */
// }
