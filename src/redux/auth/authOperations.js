//Database
import firebase from 'firebase';
//Redux
import { authSlice } from './authReducers';

const {
	authSignOutSuccess,
	setAuthErrorSuccess,
	updateProfileSuccess,
	setUserProfileSuccess,
	setAuthLoadingSuccess,
} = authSlice.actions;

const signUpUser = ({ name, email, password }) => async dispatch => {
	dispatch(setAuthLoadingSuccess(true));

	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: name });

		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(setUserProfileSuccess({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

const signInUser = ({ email, password }) => async dispatch => {
	dispatch(setAuthLoadingSuccess(true));

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(setUserProfileSuccess({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

const signOutUser = () => async dispatch => {
	dispatch(setAuthLoadingSuccess(true));

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => dispatch(authSignOutSuccess()));
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

const authStateChange = () => async dispatch => {
	dispatch(setAuthLoadingSuccess(true));

	try {
		await firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				const { uid, displayName, photoURL } = currentUser;

				const profileInfo = firebase.database().ref('users/' + uid);

				profileInfo.on('value', snapshot => {
					dispatch(
						updateProfileSuccess({ uid, displayName, photoURL, profileInfo: snapshot.val() }),
					);
				});
			}
		});
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

const updateUserProfile = ({ avatar, commonInfo, socialLinks }) => async dispatch => {
	const { name, title, email, birthday, country, region, postalCode, phoneNumber } = commonInfo;

	dispatch(setAuthLoadingSuccess(true));
	try {
		const user = await firebase.auth().currentUser;

		if (name && avatar) {
			await user.updateProfile({ displayName: name, photoURL: avatar });
		}

		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		const updatedInfo = {
			title,
			country,
			region,
			postalCode,
			phoneNumber,
			additionalEmail: email,
			birthday: birthday.toLocaleDateString(),
		};

		const users = firebase.database().ref('users/' + uid);
		users.update({ ...updatedInfo, ...socialLinks, photoURL });

		dispatch(
			updateProfileSuccess({
				uid,
				displayName,
				photoURL,
				profileInfo: { ...updatedInfo, ...socialLinks },
			}),
		);
		dispatch(setUserProfileSuccess({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

export { signUpUser, signInUser, signOutUser, authStateChange, updateUserProfile };
