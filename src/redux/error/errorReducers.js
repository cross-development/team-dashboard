//Core
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from '../auth/authActions';
import teamActions from '../team/teamActions';

const error = createReducer(null, {
	[authActions.authStateChangeFailure]: (state, { payload }) => payload,
	[authActions.singUpFailure]: (state, { payload }) => payload,
	[authActions.signOutFailure]: (state, { payload }) => payload,
	[authActions.signInFailure]: (state, { payload }) => payload,

	[teamActions.addTeammateFailure]: (state, { payload }) => payload,
	[teamActions.removeTeammateFailure]: (state, { payload }) => payload,
	[teamActions.getTeammatesFailure]: (state, { payload }) => payload,
});

export default error;
