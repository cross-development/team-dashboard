//Core
import React from 'react';
//Components
import Logo from './Logo';
import SearchPanel from './SearchPanel';
import UserMenu from './UserMenu';
import AuthMenu from './AuthMenu';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styled from 'styled-components';

const Navbar = () => {
	const { uid } = useSelector(state => state.auth);

	const handleChangeForm = query => {
		console.log(query);
	};

	return (
		<StyledHeader>
			<Logo />

			{uid && <SearchPanel onSubmit={handleChangeForm} />}

			{uid ? <UserMenu /> : <AuthMenu />}
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #ffffff;
	padding: 1rem 2rem;
`;

export default Navbar;
