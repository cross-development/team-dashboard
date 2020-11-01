//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import { Notification } from 'components/Commons';
//Styles
import { FaSearch } from 'react-icons/fa';
import { StyledForm, StyledSearchBar } from './SearchPanel.styles';
import { StyledBtn, StyledLabel, StyledInput } from './SearchPanel.styles';

const SearchPanel = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const handleChange = ({ target: { value } }) => setValue(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') return setError(true);

		onSubmit(value);
		setError(false);
		setValue('');
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<StyledSearchBar>
					<StyledBtn type="submit">
						<FaSearch />
						<StyledLabel>Search</StyledLabel>
					</StyledBtn>

					<StyledInput
						type="text"
						value={value}
						autoComplete="off"
						placeholder="Search..."
						onChange={handleChange}
					/>
				</StyledSearchBar>
			</StyledForm>

			{error && <Notification message="Please enter any teammate name" />}
		</>
	);
};

SearchPanel.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchPanel;
