//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledIconQuote } from './Profile.styles';
import { StyledName, StyledAvatar, StyledTitle, StyledButton } from './Profile.styles';
import { StyledContainer, StyledProfileWrap, StyledAvatarWrap } from './Profile.styles';
import { StyledSloganWrap, StyledSloganTitle, StyledSlogan } from './Profile.styles';

const Profile = () => {
	return (
		<StyledContainer>
			<StyledProfileWrap>
				<StyledTitle>Your Profile</StyledTitle>

				<StyledAvatarWrap>
					<StyledAvatar src="https://www.android-gameworld.ru/_nw/23/08794392.png" />
				</StyledAvatarWrap>

				<StyledName>John Doe</StyledName>

				<StyledButton type="button">Upload New Avatar</StyledButton>
			</StyledProfileWrap>

			<StyledSloganWrap>
				<StyledSloganTitle>Your Slogan</StyledSloganTitle>
				<StyledSlogan>
					Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the
					truth
				</StyledSlogan>
				<StyledIconQuote />
			</StyledSloganWrap>
		</StyledContainer>
	);
};

Profile.propTypes = {};

export default Profile;
