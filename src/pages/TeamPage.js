//Core
import React, { useState, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Teammates from 'components/Teammates';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTeammate } from 'redux/teammates/teammatesOperations';
//Services
import { uploadTeammateAvatarToServer } from 'services/storageApi';

const initialState = {
	name: '',
	email: '',
};

const TeammatesPage = () => {
	const avatarRef = useRef(null);
	const dispatch = useDispatch();
	const { teamId } = useParams();
	const { uid } = useSelector(state => state.auth);
	const { teams = [] } = useSelector(state => state.teams);
	const { error } = useSelector(state => state.teammates);

	const [state, setState] = useState(initialState);

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const memoTeammates = useMemo(
		() =>
			teams
				.filter(team => team.teamId === teamId)
				.reduce((acc, item) => {
					if (item.teammates) {
						const teammate = Object.keys(item.teammates).map(key => ({
							teammateId: key,
							userId: item.uid,
							...item.teammates[key],
						}));

						acc.push(...teammate);
					}

					return acc;
				}, []),
		[teams, teamId],
	);

	const memoTeam = useMemo(() => teams.find(team => team.teamId === teamId), [teams, teamId]);

	const handleSubmit = async e => {
		e.preventDefault();

		const avatar = avatarRef.current.files[0];
		const avatarURI = avatar ? await uploadTeammateAvatarToServer({ avatar }) : '';

		const teammate = {
			...state,
			isLiked: false,
			avatar: avatarURI,
		};

		dispatch(addTeammate({ teammate, teamId }));
		setState(initialState);
	};

	return (
		<>
			<Teammates
				{...state}
				avatarRef={avatarRef}
				teammates={memoTeammates}
				onSubmit={handleSubmit}
				onChange={handleChangeState}
				isUserTeam={memoTeam.uid === uid}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeammatesPage;
