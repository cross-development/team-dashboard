//Core
import React, { useState, useRef } from 'react';
//Components
import Teammates from 'components/Teammates';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTeammate } from 'redux/teams/teamsOperations';

const initialState = {
	name: '',
	email: '',
};

const TeammatesPage = () => {
	const [state, setState] = useState(initialState);
	const [isLiked, setIsLiked] = useState(false);

	const avatarRef = useRef(null);

	const dispatch = useDispatch();
	const { error } = useSelector(state => state);
	const { teammates } = useSelector(state => state.teams);

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

		dispatch(addTeammate(teammate));
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
