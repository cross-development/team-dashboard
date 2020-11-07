//Core
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Teammates from 'components/Teammates';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTeammate } from 'redux/teammates/teammatesOperations';

const initialState = {
	name: '',
	email: '',
};

const TeammatesPage = () => {
	// const avatarRef = useRef(null);
	const dispatch = useDispatch();
	const { teamId } = useParams();
	const { uid } = useSelector(state => state.auth);
	const { teams } = useSelector(state => state.teams);
	const { error } = useSelector(state => state.teammates);

	const [state, setState] = useState(initialState);

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const [isLiked, setIsLiked] = useState(false);

	const handleChangeLike = () => setIsLiked(prevState => !prevState);

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

	const handleSubmit = e => {
		e.preventDefault();

		const teammate = {
			...state,
			isLiked,
			avatar: null,
			// avatar: avatarRef.current.value,
		};

		dispatch(addTeammate({ teammate, teamId }));
		setState(initialState);
	};

	return (
		<>
			<Teammates
				{...state}
				// avatarRef={avatarRef}
				teammates={memoTeammates}
				onSubmit={handleSubmit}
				onChange={handleChangeState}
				onChangeLike={handleChangeLike}
				isUserTeam={memoTeam.uid === uid}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeammatesPage;
