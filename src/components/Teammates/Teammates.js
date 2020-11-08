//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TeammatesForm from './TeammatesForm';
import TeammatesCard from './TeammatesCard';
//Styles
import styled from 'styled-components';

const Teammates = ({
	name,
	email,
	avatarRef,
	isUserTeam,
	onSubmit,
	onChange,
	teammates,
	onChangeLike,
}) => {
	return (
		<StyledList>
			{isUserTeam && (
				<li>
					<TeammatesForm
						name={name}
						email={email}
						avatarRef={avatarRef}
						onSubmit={onSubmit}
						onChange={onChange}
					/>
				</li>
			)}

			{teammates.map(({ teammateId, ...teammate }) => (
				<TeammatesCard
					key={teammateId}
					teammate={teammate}
					teammateId={teammateId}
					onChangeLike={onChangeLike}
				/>
			))}
		</StyledList>
	);
};

Teammates.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	isUserTeam: PropTypes.bool.isRequired,
	teammates: PropTypes.arrayOf(PropTypes.any),
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
