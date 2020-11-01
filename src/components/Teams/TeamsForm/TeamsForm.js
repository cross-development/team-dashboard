//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaUser } from 'react-icons/fa';
import { StyledTitle, StylesForm, StyledImgWrap } from './TeamsForm.styles';
import { StyledLabel, StyledInput, StyledButton } from './TeamsForm.styles';

const TeamsForm = ({ name, email, onSubmit, onChange }) => (
	<StylesForm onSubmit={onSubmit}>
		<StyledTitle>Add New Member</StyledTitle>

		<StyledImgWrap>
			<FaUser />
		</StyledImgWrap>

		<StyledLabel>
			<StyledInput
				required
				type="name"
				name="name"
				value={name}
				placeholder="Enter full name..."
				autoComplete="off"
				onChange={onChange}
			/>
		</StyledLabel>

		<StyledLabel>
			<StyledInput
				required
				type="email"
				name="email"
				value={email}
				placeholder="Enter email..."
				autoComplete="off"
				onChange={onChange}
			/>
		</StyledLabel>

		<StyledButton type="submit">Add</StyledButton>
	</StylesForm>
);

TeamsForm.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default TeamsForm;
