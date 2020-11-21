//Core
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledIconQuote, StyledFileLabel } from './Profile.styles';
import { StyledSloganWrap, StyledSloganTitle, StyledSlogan } from './Profile.styles';
import { StyledContainer, StyledProfileWrap, StyledAvatarWrap } from './Profile.styles';
import { StyledName, StyledAvatar, StyledTitle, StyledFileInput } from './Profile.styles';

const Profile = ({ avatar, avatarRef, userName }) => {
	const [isAccepted, setIsAccepted] = useState(false);

	const setInputAccept = e => {
		if (e.target.files.length > 0) setIsAccepted(true);
	};

	useEffect(() => {
		avatarRef.current.addEventListener('change', setInputAccept);
	}, [avatarRef]);

	return (
		<StyledContainer>
			<StyledTitle>Your Profile</StyledTitle>

			<StyledProfileWrap>
				<StyledAvatarWrap isAccepted={isAccepted}>
					<StyledAvatar src={avatar} />
				</StyledAvatarWrap>

				<StyledName>{userName}</StyledName>

				<StyledFileLabel>
					Upload New Avatar
					<StyledFileInput
						type="file"
						name="avatar"
						id="avatarFile"
						ref={avatarRef}
						accept="image/jpeg,image/png"
					/>
				</StyledFileLabel>
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

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	avatarRef: PropTypes.objectOf(PropTypes.any).isRequired,
	userName: PropTypes.string.isRequired,
};

export default Profile;
