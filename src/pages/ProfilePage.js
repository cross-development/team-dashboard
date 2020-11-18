//Core
import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//Components
import Profile from 'components/UserProfile/Profile';
import Settings from 'components/UserProfile/Settings';
import Social from 'components/UserProfile/Social';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from 'redux/auth/authOperations';
//Services
import { uploadUserAvatarToServer } from 'services/storageApi';
//Styles
import styled from 'styled-components';

const commonInfoInitState = {
	name: '',
	title: '',
	email: '',
	birthday: '',
	country: '',
	region: '',
	postalCode: '',
	phoneNumber: '',
};

const socialLinksInitState = {
	facebook: '',
	twitter: '',
	reddit: '',
	instagram: '',
	linkedIn: '',
	gitHub: '',
	website: '',
};

const ProfilePage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const avatarRef = useRef(null);
	const { profileInfo, photoURL, displayName } = useSelector(state => state.auth);

	//Common info portion (for Settings component)
	const [commonInfo, setCommonInfo] = useState(profileInfo?.userInfo || commonInfoInitState);

	const handleChangeCommonInfo = ({ target: { name, value } }) =>
		setCommonInfo(prevState => ({ ...prevState, [name]: value }));

	const handleChangeBirthdayInfo = value =>
		setCommonInfo(prevState => ({ ...prevState, birthday: value }));

	//Social links portion (for Social component)
	const [socialLinks, setSocialLinks] = useState(profileInfo?.socialLinks || socialLinksInitState);

	const handleChangeSocialLinks = ({ target: { name, value } }) =>
		setSocialLinks(prevState => ({ ...prevState, [name]: value }));

	//Submit method: dispatches all info to the firebase
	const handleSubmit = async e => {
		e.preventDefault();

		const avatar = avatarRef.current.files[0];
		const avatarURI = avatar ? await uploadUserAvatarToServer({ avatar }) : photoURL;

		const profileInformation = {
			avatar: avatarURI,
			commonInfo,
			socialLinks,
		};

		dispatch(updateUserProfile({ ...profileInformation }));
		history.replace('/all-teams');
	};

	const MemoProfile = useMemo(
		() => <Profile avatar={photoURL} userName={displayName} avatarRef={avatarRef} />,
		[displayName, photoURL, avatarRef],
	);

	const MemoSettings = useMemo(
		() => (
			<Settings
				commonInfo={commonInfo}
				onChangeCommonInfo={handleChangeCommonInfo}
				onChangeBirthdayInfo={handleChangeBirthdayInfo}
			/>
		),
		[commonInfo],
	);

	const MemoSocial = useMemo(
		() => <Social socialLinks={socialLinks} onChangeSocialLinks={handleChangeSocialLinks} />,
		[socialLinks],
	);

	return (
		<StyledProfileForm onSubmit={handleSubmit}>
			{MemoProfile}

			{MemoSettings}

			{MemoSocial}
		</StyledProfileForm>
	);
};

const StyledProfileForm = styled.form`
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

// const [avatar, setAvatar] = useState(photoURL);
// const memoAvatarCallback = useCallback(() => setAvatar(photoURL), [photoURL]);
// useEffect(() => memoAvatarCallback(), [memoAvatarCallback]);
