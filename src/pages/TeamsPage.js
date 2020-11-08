//Core
import React, { useState, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Teams from 'components/Teams';
import { Notification, Loader } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { createTeam } from 'redux/teams/teamsOperations';
//Services
import { uploadTeamAvatarToServer } from 'services/storageApi';

const initialState = {
	name: '',
	email: '',
};

const TeamsPage = () => {
	const avatarRef = useRef(null);
	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();
	const { uid } = useSelector(state => state.auth);
	const { teams, error, loading: teamsLoading } = useSelector(state => state.teams);

	const { pathname } = useLocation();

	const filteredTeams = useMemo(
		() => teams.filter(team => (pathname.slice(1) === 'my-teams' ? team.uid === uid : team)),
		[uid, pathname, teams],
	);

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = async e => {
		e.preventDefault();

		const avatar = avatarRef.current.files[0];
		const avatarURI = avatar ? await uploadTeamAvatarToServer({ avatar }) : '';

		const team = {
			...state,
			isLiked: false,
			avatar: avatarURI,
		};

		await dispatch(createTeam(team, uid));
		await setState(initialState);
	};

	return (
		<>
			{teamsLoading && <Loader onLoad={teamsLoading} />}

			{uid && !teamsLoading && (
				<Teams
					{...state}
					path={pathname}
					avatarRef={avatarRef}
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
// && filteredTeams.length > 0
