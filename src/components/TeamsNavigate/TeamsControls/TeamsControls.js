//Core
import React from 'react';
//Styles
import { StyledControlWrap, StyledNavLink } from './TeamsControls.styles';

const TeamsControls = () => (
	<StyledControlWrap>
		<StyledNavLink to="/teams">All</StyledNavLink>
		<StyledNavLink to="/teammates">My Team</StyledNavLink>
	</StyledControlWrap>
);

export default TeamsControls;
