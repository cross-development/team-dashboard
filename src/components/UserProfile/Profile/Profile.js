//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledContainer, StyledProfileWrap, StyledSloganWrap } from './Profile.styles';

const Profile = props => {
	return (
		<StyledContainer>
			<StyledProfileWrap></StyledProfileWrap>

			<StyledSloganWrap></StyledSloganWrap>
		</StyledContainer>
	);
};

Profile.propTypes = {};

export default Profile;
