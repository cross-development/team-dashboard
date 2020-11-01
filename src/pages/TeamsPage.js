//Core
import React, { useState } from 'react';
//Components
import Teams from 'components/Teams';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
	name: '',
	email: '',
};

const TeamsPage = () => {
	const [state, setState] = useState(initialState);
	const [teamMembers, setTeamMembers] = useState([]);

	const { error } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		console.log(state);
		// dispatch(signInUser({ ...state }));
		setState(initialState);
	};

	return (
		<>
			<Teams
				{...state}
				teamMembers={teamMembers}
				onSubmit={handleSubmit}
				onChange={handleChangeState}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeamsPage;
