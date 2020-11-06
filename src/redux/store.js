//Core
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//Redux
import { authSlice } from './auth/authReducers';
import { teamsSlice } from './teams/teamsReducers';
import { teammatesSlice } from './teammates/teammatesReducers';

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[teamsSlice.name]: teamsSlice.reducer,
	[teammatesSlice.name]: teammatesSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
