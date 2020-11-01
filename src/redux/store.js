//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from 'redux/auth';
import { teamReducers } from 'redux/team';
import { loaderReducers } from 'redux/loader';
import { errorReducers } from 'redux/error';

const store = configureStore({
	reducer: {
		auth: authReducers,
		team: teamReducers,
		loader: loaderReducers,
		error: errorReducers,
	},
});

export default store;
