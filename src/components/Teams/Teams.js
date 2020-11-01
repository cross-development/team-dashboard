//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TeamsForm from './TeamsForm';
import TeamsCard from './TeamsCard';
//Styles
import styled from 'styled-components';

const Teams = ({ name, email, onSubmit, onChange, teamMembers }) => (
	<StyledContainer>
		<StyledList>
			<li>
				<TeamsForm name={name} email={email} onSubmit={onSubmit} onChange={onChange} />
			</li>
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
			<TeamsCard />
		</StyledList>
	</StyledContainer>
);

Teams.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

const StyledContainer = styled.div`
	/* display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0 3rem; */
`;

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
