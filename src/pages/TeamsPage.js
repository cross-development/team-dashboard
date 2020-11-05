//Core
import React, { useState, useEffect } from 'react';
//Components
import Teams from 'components/Teams';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { createTeam, getAllTeams } from 'redux/teams/teamsOperations';

import teamAvatar from 'assets/team.png';

const initialState = {
	name: '',
	email: '',
};

const TeamsPage = () => {
	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);
	const { error } = useSelector(state => state);
	const { teams } = useSelector(state => state.teams);

	useEffect(() => {
		dispatch(getAllTeams());
	}, [dispatch]);

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		const team = {
			...state,
			avatar: teamAvatar,
		};

		dispatch(createTeam(team, user.uid));
		setState(initialState);
	};

	return (
		<>
			<Teams {...state} teams={teams} onSubmit={handleSubmit} onChange={handleChangeState} />

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeamsPage;
