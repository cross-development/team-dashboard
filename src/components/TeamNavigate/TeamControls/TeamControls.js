//Core
import React from 'react';
//Styles
import { StyledControlWrap, StyledNavLink } from './TeamControls.styles';

const TeamControls = () => (
	<StyledControlWrap>
		<StyledNavLink to="/teams">All</StyledNavLink>
		<StyledNavLink to="/team">My Team</StyledNavLink>
	</StyledControlWrap>
);

export default TeamControls;
