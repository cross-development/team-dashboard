//Core
import React from 'react';
//Components
import Profile from './Profile';
import Settings from './Settings';
import Social from './Social';
//Styles
import styled from 'styled-components';

const UserProfile = () => {
	return (
		<StyledContainer>
			<Profile />

			<Settings />

			<Social />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	height: 72vh;
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

export default UserProfile;
