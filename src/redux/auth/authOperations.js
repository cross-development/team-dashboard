//Database
import firebase from 'firebase';
//Redux
import authActions from './authActions';

const { singUpRequest, signInRequest, signOutRequest, authStateChangeRequest } = authActions;
const { singUpSuccess, signInSuccess, signOutSuccess, authStateChangeSuccess } = authActions;
const { singUpFailure, signInFailure, signOutFailure, authStateChangeFailure } = authActions;

const signUpUser = ({ name, email, password }) => async dispatch => {
	dispatch(singUpRequest());

	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: name });

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(singUpSuccess({ uid, displayName }));
	} catch (error) {
		dispatch(singUpFailure(error));
	}
};

const signInUser = ({ email, password }) => async dispatch => {
	dispatch(signInRequest());

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(signInSuccess({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(signInFailure(error));
	}
};

const signOutUser = () => async dispatch => {
	dispatch(signOutRequest());

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => dispatch(signOutSuccess()));
	} catch (error) {
		dispatch(signOutFailure(error));
	}
};

const authStateChange = () => async dispatch => {
	dispatch(authStateChangeRequest());

	try {
		await firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				const { uid, displayName, photoURL } = currentUser;

				dispatch(authStateChangeSuccess({ uid, displayName, photoURL }));
			}
		});
	} catch (error) {
		dispatch(authStateChangeFailure(error));
	}
};

export { signUpUser, signInUser, signOutUser, authStateChange };
