//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TeamsForm from './TeamsForm';
import TeamsCard from './TeamsCard';
//Styles
import styled from 'styled-components';

const Teams = ({ name, email, teams, path, onSubmit, onChange }) => {
	return (
		<StyledList>
			{path.slice(1) === 'all-teams' && (
				<li>
					<TeamsForm name={name} email={email} onSubmit={onSubmit} onChange={onChange} />
				</li>
			)}

			{teams.map(team => (
				<TeamsCard key={team.email} {...team} />
			))}
		</StyledList>
	);
};

Teams.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	teams: PropTypes.arrayOf(PropTypes.any),
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

export default Teams;
