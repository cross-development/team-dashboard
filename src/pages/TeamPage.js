//Core
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Teammates from 'components/Teammates';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTeammate, getTeammates } from 'redux/teams/teamsOperations';

const initialState = {
	name: '',
	email: '',
};

const TeammatesPage = () => {
	const [state, setState] = useState(initialState);
	const [isLiked, setIsLiked] = useState(false);

	const avatarRef = useRef(null);
	const { teamId } = useParams();

	const dispatch = useDispatch();
	const { teammates, error } = useSelector(state => state.teams);

	useEffect(() => {
		dispatch(getTeammates({ teamId }));
	}, [dispatch, teamId]);

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleChangeLike = () => setIsLiked(prevState => !prevState);

	const handleSubmit = e => {
		e.preventDefault();

		const teammate = {
			...state,
			isLiked,
			avatar: avatarRef.current.value,
		};

		dispatch(addTeammate({ teammate, teamId }));
		setState(initialState);
	};

	return (
		<>
			<Teammates
				{...state}
				avatarRef={avatarRef}
				teamMembers={teammates}
				onSubmit={handleSubmit}
				onChange={handleChangeState}
				onChangeLike={handleChangeLike}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default TeammatesPage;
