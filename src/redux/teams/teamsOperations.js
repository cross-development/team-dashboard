//Database
import firebase from 'firebase';
//Redux
import teamsActions from './teamsActions';

const { addTeamRequest, addTeamSuccess, addTeamFailure } = teamsActions;
const { removeTeamRequest, removeTeamSuccess, removeTeamFailure } = teamsActions;
const { getAllTeamsRequest, getAllTeamsSuccess, getAllTeamsFailure } = teamsActions;

const { addTeammateRequest, addTeammateSuccess, addTeammateFailure } = teamsActions;
const { removeTeammateRequest, removeTeammateSuccess, removeTeammateFailure } = teamsActions;
const { getTeammatesRequest, getTeammatesSuccess, getTeammatesFailure } = teamsActions;

//Fixed
const createTeam = (team, uid) => dispatch => {
	dispatch(addTeamRequest());

	try {
		const teams = firebase.database().ref('teams/');
		teams.push({ uid, ...team });

		dispatch(addTeamSuccess());
	} catch (error) {
		dispatch(addTeamFailure(error));
	}
};

const removeTeam = ({ uid, tmId }) => dispatch => {
	dispatch(removeTeamRequest());

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

		dispatch(removeTeamSuccess());
	} catch (error) {
		dispatch(removeTeamFailure(error));
	}
};

const getAllTeams = () => dispatch => {
	dispatch(getAllTeamsRequest());

	try {
		const teammates = firebase.database().ref('teams');

		teammates.on('value', snapshot => {
			let teammatesData = [];

			if (!snapshot.val()) {
				dispatch(getAllTeamsSuccess(teammatesData));
				return;
			}

			teammatesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ teamId: key, ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(getAllTeamsSuccess(teammatesData));
		});
	} catch (error) {
		dispatch(getAllTeamsFailure(error));
	}
};

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

export { createTeam, removeTeam, getAllTeams, addTeammate, removeTeammate, getTeammates };
