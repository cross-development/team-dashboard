//Core
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Teams from 'components/Teams';
import { Notification, Loader } from 'components/Commons';
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
	const { user, loader: userLoading } = useSelector(state => state.auth);
	const { teams, error, loader: teamsLoading } = useSelector(state => state.teams);
	console.log('teams ', teams);
	const { pathname } = useLocation();

	useEffect(() => {
		pathname.slice(1) === 'all-teams' && dispatch(getAllTeams());
	}, [dispatch, pathname]);

	const filteredTeams = useMemo(
		() => teams.filter(team => (pathname.slice(1) === 'my-teams' ? team.uid === user.uid : team)),
		[user, pathname, teams],
	);

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
			{teamsLoading && <Loader onLoad={teamsLoading} />}

			{user && !teamsLoading && filteredTeams.length > 0 && (
				<Teams
					{...state}
					path={pathname}
					teams={filteredTeams}
					onSubmit={handleSubmit}
					onChange={handleChangeState}
				/>
			)}

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeamsPage;
