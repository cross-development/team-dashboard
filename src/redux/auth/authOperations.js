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

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(setUserProfileSuccess({ uid, displayName }));
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

		dispatch(updateProfileSuccess({ uid, displayName, photoURL }));
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

				dispatch(updateProfileSuccess({ uid, displayName, photoURL }));
			}
		});
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
	} finally {
		dispatch(setAuthLoadingSuccess(false));
	}
};

const updateUserProfile = ({ fullName, photoURL: photo }) => async dispatch => {
	dispatch(setAuthLoadingSuccess(true));
	try {
		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName, photoURL: photo });

		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(updateProfileSuccess({ uid, displayName, photoURL }));
		dispatch(setAuthLoadingSuccess(false));
	} catch (error) {
		dispatch(setAuthErrorSuccess(error));
		dispatch(setAuthLoadingSuccess(false));
	}
};

export { signUpUser, signInUser, signOutUser, authStateChange, updateUserProfile };
