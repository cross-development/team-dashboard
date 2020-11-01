//Core
import React, { useState, useRef } from 'react';
//Components
import Teams from 'components/Teams';
import { Notification } from 'components/Commons';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTeammate } from 'redux/team/teamOperations';

const initialState = {
	name: '',
	email: '',
};

const TeamsPage = () => {
	const [state, setState] = useState(initialState);
	const [isLiked, setIsLiked] = useState(false);

	const avatarRef = useRef(null);

	const dispatch = useDispatch();
	const { error } = useSelector(state => state);
	const { teammates } = useSelector(state => state.team);

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
			<Teams
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

export default TeamsPage;
