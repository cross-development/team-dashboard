//Core
import React, { useState } from 'react';
//Components
import Profile from 'components/UserProfile/Profile';
import Settings from 'components/UserProfile/Settings';
import Social from 'components/UserProfile/Social';
//Styles
import styled from 'styled-components';

const ProfilePage = () => {
	const [updatedSocialLinks, setUpdatedSocialLinks] = useState(null);

	//Social Links handler: received info from Social component
	const handleUpdateSocialLinks = updatedSocialLinks => {
		setUpdatedSocialLinks(updatedSocialLinks);
	};

	const handleSubmit = e => {
		e.preventDefault();

		//here will be a method that will receive all the states and send them to the firebase
	};

	return (
		<StyledContainer>
			<Profile />

			<Settings />

			<Social onUpdateSocialLinks={handleUpdateSocialLinks} />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	height: auto;
	max-width: 96%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social'
		'profile profile profile settings settings settings settings settings social social social social';
`;

export default ProfilePage;
