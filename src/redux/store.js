//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from 'redux/auth';
import { teamsReducers } from 'redux/teams';
// import { loaderReducers } from 'redux/loader';
// import { errorReducers } from 'redux/error';

const store = configureStore({
	reducer: {
		auth: authReducers,
		teams: teamsReducers,
		// loader: loaderReducers,
		// error: errorReducers,
	},
});

export default store;
