//Database
import firebase from 'firebase';
//Redux
import teamActions from './teamActions';

const { addTeammateRequest, addTeammateSuccess, addTeammateFailure } = teamActions;
const { removeTeammateRequest, removeTeammateSuccess, removeTeammateFailure } = teamActions;
const { getTeammatesRequest, getTeammatesSuccess, getTeammatesFailure } = teamActions;

//Fixed
const addTeammate = credentials => dispatch => {
	dispatch(addTeammateRequest());

	try {
		const userCollection = firebase.database().ref('team');
		userCollection.push(credentials);

		dispatch(addTeammateSuccess());
	} catch (error) {
		dispatch(addTeammateFailure(error));
	}
};

const removeTeammate = ({ uid, tmId }) => dispatch => {
	dispatch(removeTeammateRequest());

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
		dispatch(removeTeammateFailure(error));
	}
};

const getTeammates = () => dispatch => {
	dispatch(getTeammatesRequest());

	try {
		const teammates = firebase.database().ref('team');

		teammates.on('value', snapshot => {
			let teammatesData = [];

			if (!snapshot.val()) {
				dispatch(getTeammatesSuccess(teammatesData));
				return;
			}

			teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ tmId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(getTeammatesSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(getTeammatesFailure(error));
	}
};

export { addTeammate, removeTeammate, getTeammates };
