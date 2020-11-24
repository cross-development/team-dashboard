//Core
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaUsers } from 'react-icons/fa';
import { StyledAddTeamIcon } from './TeamsForm.styles';
import { StyledTitle, StylesForm, StyledImgWrap, StyledFileInput } from './TeamsForm.styles';
import { StyledLabel, StyledInput, StyledButton, StyledFileLabel } from './TeamsForm.styles';

const TeamsForm = ({ name, avatarRef, email, onSubmit, onChange }) => {
	const [isAccepted, setIsAccepted] = useState(false);

	const setInputAccept = e => {
		if (e.target.files.length > 0) setIsAccepted(true);
	};

	useEffect(() => {
		avatarRef.current.addEventListener('change', setInputAccept);
	}, [avatarRef]);

	return (
		<StylesForm onSubmit={onSubmit}>
			<StyledTitle>Add New Team</StyledTitle>

			<StyledFileLabel>
				<StyledImgWrap isAccepted={isAccepted}>
					<StyledFileInput
						type="file"
						name="avatar"
						id="avatarFile"
						ref={avatarRef}
						accept="image/jpeg,image/png"
					/>
					<FaUsers />
				</StyledImgWrap>
			</StyledFileLabel>

			<StyledLabel>
				<StyledInput
					required
					type="name"
					name="name"
					value={name}
					placeholder="Enter team title..."
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

			<StyledButton type="submit">
				<StyledAddTeamIcon />
				Add
			</StyledButton>
		</StylesForm>
	);
};

TeamsForm.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default TeamsForm;
