//Core
import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
//Components
import Profile from 'components/UserProfile/Profile';
import Settings from 'components/UserProfile/Settings';
import Social from 'components/UserProfile/Social';
//Redux
import { useSelector, useDispatch } from 'react-redux';
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
	//Avatar info state (for Profile component)
	const avatarRef = useRef(null);

	const dispatch = useDispatch();
	const { photoURL } = useSelector(state => state.auth);

	const [avatar, setAvatar] = useState('null');

	const memoAvatarCallback = useCallback(() => setAvatar(photoURL), [photoURL]);

	useEffect(() => memoAvatarCallback(), [memoAvatarCallback]);

	//Common info state (for Settings component)
	const [commonInfo, setCommonInfo] = useState(commonInfoInitState);

	const handleChangeCommonInfo = ({ target: { name, value } }) =>
		setCommonInfo(prevState => ({ ...prevState, [name]: value }));

	const handleChangeBirthdayInfo = value =>
		setCommonInfo(prevState => ({ ...prevState, birthday: value }));

	//Social links state (for Social component)
	const [socialLinks, setSocialLinks] = useState(socialLinksInitState);

	const handleChangeSocialLinks = ({ target: { name, value } }) =>
		setSocialLinks(prevState => ({ ...prevState, [name]: value }));

	//Submit method: dispatches all info to the firebase
	const handleSubmit = async e => {
		e.preventDefault();

		const uploadedAvatar = avatarRef.current.files[0];
		const avatarURI = uploadedAvatar ? await uploadUserAvatarToServer({ avatar }) : '';

		const profileInformation = {
			avatar: avatarURI,
			commonInfo: { ...commonInfo },
			socialLinks: { ...socialLinks },
		};

		console.log(profileInformation);
	};

	const MemoProfile = useMemo(() => <Profile avatar={avatar} avatarRef={avatarRef} />, [
		avatar,
		avatarRef,
	]);

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
