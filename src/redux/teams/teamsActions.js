//Core
import { createAction } from '@reduxjs/toolkit';

const createTeamRequest = createAction('teams/createTeamRequest');
const createTeamSuccess = createAction('teams/createTeamSuccess');
const createTeamFailure = createAction('teams/createTeamFailure');

const addTeammateRequest = createAction('teams/addTeammateRequest');
const addTeammateSuccess = createAction('teams/addTeammateSuccess');
const addTeammateFailure = createAction('teams/addTeammateFailure');

const removeTeammateRequest = createAction('teams/removeTeammateRequest');
const removeTeammateSuccess = createAction('teams/removeTeammateSuccess');
const removeTeammateFailure = createAction('teams/removeTeammateFailure');

const getTeammatesRequest = createAction('teams/getTeammatesRequest');
const getTeammatesSuccess = createAction('teams/getTeammatesSuccess');
const getTeammatesFailure = createAction('teams/getTeammatesFailure');

const teamActions = {
	createTeamRequest,
	createTeamSuccess,
	createTeamFailure,

	addTeammateRequest,
	addTeammateSuccess,
	addTeammateFailure,

	removeTeammateRequest,
	removeTeammateSuccess,
	removeTeammateFailure,

	getTeammatesRequest,
	getTeammatesSuccess,
	getTeammatesFailure,
};

export default teamActions;
