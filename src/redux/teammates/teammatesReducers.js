//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	teammates: [],
	error: null,
	loading: false,
};

export const teammatesSlice = createSlice({
	name: 'teammates',

	initialState: state,

	reducers: {
		getAllTeammatesSuccess: (state, { payload }) => ({
			...state,
			teammates: [...payload],
		}),

		addTeammateSuccess: (state, { payload }) => ({
			...state,
		}),

		removeTeammateSuccess: (state, { payload }) => ({
			...state,
		}),

		setTeammatesLoadingSuccess: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setTeammatesErrorSuccess: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		// clearAllTeammates: () => state,
	},
});
