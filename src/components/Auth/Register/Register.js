//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledH1, StyledSpan } from './Register.styles';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './Register.styles';

const Register = ({ name, email, password, onSubmit, onChange }) => (
	<StyledForm onSubmit={onSubmit}>
		<StyledH1>
			<StyledSpan>Sign up</StyledSpan> to create your team
		</StyledH1>

		<StyledLabel>
			Full name
			<StyledInput
				required
				type="text"
				name="name"
				value={name}
				autoComplete="off"
				onChange={onChange}
			/>
		</StyledLabel>

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

		<StyledButton type="submit">Sign up</StyledButton>
	</StyledForm>
);

Register.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Register;
