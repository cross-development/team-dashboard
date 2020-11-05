//Core
import React from 'react';
//Styles
import { StyledControlWrap, StyledNavLink } from './TeamsControls.styles';

const TeamsControls = () => (
	<StyledControlWrap>
		<StyledNavLink to="/teams">All Teams</StyledNavLink>
		<StyledNavLink to="/teammates">My Teams</StyledNavLink>
	</StyledControlWrap>
);

export default TeamsControls;
