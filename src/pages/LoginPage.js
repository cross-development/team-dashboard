//Core
import React, { useState } from 'react';
//Components
import { Login } from 'components/Auth';
import { Notification } from 'components/Commons';
//Redux
import { signInUser } from 'redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
	email: '',
	password: '',
};

const LoginPage = () => {
	const [state, setState] = useState(initialState);

	const { error } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(signInUser({ ...state }));
		setState(initialState);
	};

	return (
		<>
			<Login {...state} onSubmit={handleSubmit} onChange={handleChangeState} />

			{error && <Notification message={error.message} />}
		</>
	);
};

export default LoginPage;
