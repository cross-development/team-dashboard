//Database
import firebase from 'firebase';
//Redux
import { teamsSlice } from './teamsReducers';

const {
	addTeamSuccess,
	removeTeamSuccess,
	getAllTeamsSuccess,
	setTeamsErrorSuccess,
	setTeamsLoadingSuccess,
} = teamsSlice.actions;

//Fixed
const createTeam = (team, uid) => dispatch => {
	dispatch(setTeamsLoadingSuccess(true));

	try {
		const teams = firebase.database().ref('teams/');
		teams.push({ uid, ...team });

		dispatch(addTeamSuccess());
	} catch (error) {
		dispatch(setTeamsErrorSuccess(error));
	} finally {
		dispatch(setTeamsLoadingSuccess(false));
	}
};

//fixed
const removeTeam = ({ teamId }) => dispatch => {
	dispatch(setTeamsLoadingSuccess(true));

	try {
		firebase
			.database()
			.ref('teams/' + teamId)
			.remove();

		dispatch(removeTeamSuccess());
	} catch (error) {
		dispatch(setTeamsErrorSuccess(error));
	} finally {
		dispatch(setTeamsLoadingSuccess(false));
	}
};

//fixed
const getAllTeams = () => dispatch => {
	dispatch(setTeamsLoadingSuccess(true));

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
		dispatch(setTeamsErrorSuccess(error));
	} finally {
		dispatch(setTeamsLoadingSuccess(false));
	}
};

export { createTeam, removeTeam, getAllTeams };
