//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaUser } from 'react-icons/fa';
import { StyledTitle, StylesForm, StyledImgWrap, StyledFileInput } from './TeammatesForm.styles';
import { StyledLabel, StyledInput, StyledButton, StyledFileLabel } from './TeammatesForm.styles';

const TeammatesForm = ({ name, email, avatarRef, onSubmit, onChange }) => {
	return (
		<StylesForm onSubmit={onSubmit}>
			<StyledTitle>Add New Member</StyledTitle>

			<StyledFileLabel htmlFor="avatarFile">
				<StyledImgWrap>
					<StyledFileInput
						type="file"
						name="avatar"
						id="avatarFile"
						ref={avatarRef}
						accept="image/jpeg,image/png"
					/>
					<FaUser />
				</StyledImgWrap>
			</StyledFileLabel>

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
};

TeammatesForm.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default TeammatesForm;
