//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledGeneralInfo, StyledLabel, StyledInput, StyledRadioWrap } from './GeneralInfo.styles';

const GeneralInfo = ({ generalInfo = {}, onChangeGeneralInfo }) => {
	const { name, gender, email } = generalInfo;

	return (
		<StyledGeneralInfo>
			<StyledLabel>
				Full Name
				<StyledInput
					name="name"
					type="text"
					value={name}
					autoComplete="off"
					onChange={onChangeGeneralInfo}
					placeholder="Enter your full name here"
				/>
			</StyledLabel>

			<StyledLabel>
				Gender
				<StyledRadioWrap onChange={onChangeGeneralInfo}>
					<input name="gender" defaultChecked={gender === 'male'} type="radio" value="male" />
					Male
					<input name="gender" defaultChecked={gender === 'female'} type="radio" value="female" />
					Female
					<input name="gender" defaultChecked={gender === 'other'} type="radio" value="other" />
					Other
				</StyledRadioWrap>
			</StyledLabel>

			<StyledLabel>
				Email
				<StyledInput
					name="email"
					type="email"
					autoComplete="off"
					onChange={onChangeGeneralInfo}
					value={email}
					placeholder="Enter your email here"
				/>
			</StyledLabel>
		</StyledGeneralInfo>
	);
};

GeneralInfo.propTypes = {
	onChangeGeneralInfo: PropTypes.func.isRequired,
	generalInfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
};

export default GeneralInfo;
