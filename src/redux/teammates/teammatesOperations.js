//Database
import firebase from 'firebase';
//Redux
import { teammatesSlice } from './teammatesReducers';

const {
	addTeammateSuccess,
	removeTeammateSuccess,
	getAllTeammatesSuccess,
	setTeammatesErrorSuccess,
	setTeammatesLoadingSuccess,
} = teammatesSlice.actions;

//Fixed
const addTeammate = ({ teammate, teamId }) => dispatch => {
	dispatch(setTeammatesLoadingSuccess(true));

	try {
		const userCollection = firebase.database().ref('teams/' + teamId);
		userCollection.child('teammates').push(teammate);

		dispatch(addTeammateSuccess());
	} catch (error) {
		dispatch(setTeammatesErrorSuccess(error));
	} finally {
		dispatch(setTeammatesLoadingSuccess(false));
	}
};

const removeTeammate = ({ uid, tmId }) => dispatch => {
	dispatch(setTeammatesLoadingSuccess(true));

	try {
		const favMovies = firebase.database().ref('users/' + uid + '/team');

		favMovies.once('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === tmId) {
					firebase
						.database()
						.ref('users/' + uid + '/team/' + data.key)
						.remove();
				}
			}),
		);

		dispatch(removeTeammateSuccess());
	} catch (error) {
		dispatch(setTeammatesErrorSuccess(error));
	} finally {
		dispatch(setTeammatesLoadingSuccess(false));
	}
};

//Fixed
const getTeammates = ({ teamId }) => dispatch => {
	dispatch(setTeammatesLoadingSuccess(true));

	try {
		const teammates = firebase.database().ref('teams/' + teamId + '/teammates');

		teammates.on('value', snapshot => {
			let teammatesData = [];

			if (!snapshot.val()) {
				dispatch(getAllTeammatesSuccess(teammatesData));
				return;
			}

			teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ tmId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(getAllTeammatesSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(setTeammatesErrorSuccess(error));
	} finally {
		dispatch(setTeammatesLoadingSuccess(false));
	}
};

export { addTeammate, removeTeammate, getTeammates };
