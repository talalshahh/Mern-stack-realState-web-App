import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	currentUser: null,
	error: null,
	loading: false,
};

// Slice for user authentication
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signInStart: (state) => {
			state.loading = true;
		},
		signInSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		resetError: (state) => {
			state.error = null;
		},
		updateUserStart: (state) => {
			state.loading = true;
		},
		updateUserSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = null;
		},
		updateUserFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		deleteUserStart: (state, action) => {
			state.loading = true;
		},
		deleteUserSuccess: (state) => {
			state.currentUser = null;
			state.loading = false;
			state.error;
		},
		deleteUserFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		signOutUserStart: (state, action) => {
			state.loading = true;
		},
		signOutUserSuccess: (state) => {
			state.currentUser = null;
			state.loading = false;
			state.error;
		},
		signOutUserFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Export actions
export const {
	signInStart,
	signInSuccess,
	signInFailure,
	resetError,
	updateUserStart,
	updateUserFailure,
	updateUserSuccess,
	deleteUserStart,
	deleteUserFailure,
	deleteUserSuccess,
	signOutUserStart,
	signOutUserSuccess,
	signOutUserFailure,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
