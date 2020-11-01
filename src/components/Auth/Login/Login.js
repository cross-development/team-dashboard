//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledH1, StyledSpan } from './Login.styles';
import { StylesForm, StyledLabel, StyledInput, StyledButton } from './Login.styles';

const Login = ({ email, password, onSubmit, onChange }) => (
	<StylesForm onSubmit={onSubmit}>
		<StyledH1>
			<StyledSpan>Sing in</StyledSpan> to create your team
		</StyledH1>

		<StyledLabel>
			Email
			<StyledInput
				required
				type="email"
				name="email"
				value={email}
				autoComplete="off"
				onChange={onChange}
			/>
		</StyledLabel>

		<StyledLabel>
			Password
			<StyledInput
				required
				type="password"
				name="password"
				value={password}
				autoComplete="off"
				onChange={onChange}
			/>
		</StyledLabel>

		<StyledButton type="submit">Log in</StyledButton>
	</StylesForm>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Login;
