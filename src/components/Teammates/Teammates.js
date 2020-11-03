//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TeammatesForm from './TeammatesForm';
import TeammatesCard from './TeammatesCard';
//Styles
import styled from 'styled-components';

const Teammates = ({ name, email, avatarRef, onSubmit, onChange, teamMembers, onChangeLike }) => (
	<StyledList>
		<li>
			<TeammatesForm
				name={name}
				email={email}
				avatarRef={avatarRef}
				onSubmit={onSubmit}
				onChange={onChange}
			/>
		</li>

		{teamMembers.map(({ name, email, avatar, isLiked }) => (
			<TeammatesCard
				key={email}
				name={name}
				email={email}
				avatar={avatar}
				isLiked={isLiked}
				onChangeLike={onChangeLike}
			/>
		))}
	</StyledList>
);

Teammates.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	teamMembers: PropTypes.arrayOf(PropTypes.any),
	onChangeLike: PropTypes.func.isRequired,
};

const StyledList = styled.ul`
	display: grid;
	max-width: calc(100vw - 80px);
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	grid-gap: 30px;
	margin: 0 auto;
	padding: 0.1rem;
	list-style: none;
`;

export default Teammates;
