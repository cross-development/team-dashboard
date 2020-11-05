//Core
import { createAction } from '@reduxjs/toolkit';

const addTeamRequest = createAction('teams/addTeamRequest');
const addTeamSuccess = createAction('teams/addTeamSuccess');
const addTeamFailure = createAction('teams/addTeamFailure');

const removeTeamRequest = createAction('teams/removeTeamRequest');
const removeTeamSuccess = createAction('teams/removeTeamSuccess');
const removeTeamFailure = createAction('teams/removeTeamFailure');

const getAllTeamsRequest = createAction('teams/getAllTeamsRequest');
const getAllTeamsSuccess = createAction('teams/getAllTeamsSuccess');
const getAllTeamsFailure = createAction('teams/getAllTeamsFailure');

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
	addTeamRequest,
	addTeamSuccess,
	addTeamFailure,

	removeTeamRequest,
	removeTeamSuccess,
	removeTeamFailure,

	getAllTeamsRequest,
	getAllTeamsSuccess,
	getAllTeamsFailure,

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
