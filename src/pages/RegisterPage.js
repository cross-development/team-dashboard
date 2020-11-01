//Core
import React, { useState } from 'react';
//Components
import { Register } from 'components/Auth';
import { Notification } from 'components/Commons';
//Redux
import { signUpUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
	name: '',
	email: '',
	password: '',
};

const RegisterPage = () => {
	const [state, setState] = useState(initialState);

	const { error } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(signUpUser({ ...state }));
		setState(initialState);
	};

	return (
		<>
			<Register {...state} onSubmit={handleSubmit} onChange={handleChangeState} />

			{error && <Notification message={error.message} />}
		</>
	);
};

export default RegisterPage;
