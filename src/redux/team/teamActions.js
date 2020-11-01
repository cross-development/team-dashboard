//Core
import { createAction } from '@reduxjs/toolkit';

const addTeammateRequest = createAction('team/addTeammateRequest');
const addTeammateSuccess = createAction('team/addTeammateSuccess');
const addTeammateFailure = createAction('team/addTeammateFailure');

const removeTeammateRequest = createAction('team/removeTeammateRequest');
const removeTeammateSuccess = createAction('team/removeTeammateSuccess');
const removeTeammateFailure = createAction('team/removeTeammateFailure');

const getTeammatesRequest = createAction('team/getTeammatesRequest');
const getTeammatesSuccess = createAction('team/getTeammatesSuccess');
const getTeammatesFailure = createAction('team/getTeammatesFailure');

const teamActions = {
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
