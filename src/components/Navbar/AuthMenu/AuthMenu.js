//Core
import React from 'react';
//Styles
import { StyledLink, StyledLoginIcon, StyledUserWrapDiv, StyledRegIcon } from './AuthMenu.styles';

const AuthMenu = () => (
	<StyledUserWrapDiv>
		<StyledLink to="/register">
			<StyledRegIcon />
			Sign Up
		</StyledLink>

		<StyledLink to="/login">
			<StyledLoginIcon />
			Sing In
		</StyledLink>
	</StyledUserWrapDiv>
);

export default AuthMenu;
