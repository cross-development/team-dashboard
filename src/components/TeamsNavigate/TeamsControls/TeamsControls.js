//Core
import React from 'react';
//Styles
import { StyledControlWrap, StyledNavLink } from './TeamsControls.styles';

const TeamsControls = () => (
	<StyledControlWrap>
		<StyledNavLink to="/all-teams">All Teams</StyledNavLink>
		<StyledNavLink to="/my-teams">My Teams</StyledNavLink>
	</StyledControlWrap>
);

export default TeamsControls;
