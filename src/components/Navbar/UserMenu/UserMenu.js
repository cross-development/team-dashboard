//Core
import React from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from 'redux/auth/authOperations';
//Styles
import UserAvatar from 'assets/user.png';
import { FaChevronDown } from 'react-icons/fa';
import { StylesContainer, StyledImg, StyledName, StyledDropdown } from './UserMenu.styles';

const UserMenu = () => {
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleSignOutUser = () => dispatch(signOutUser());

	return (
		<StylesContainer>
			<StyledImg src={UserAvatar} />

			<StyledName>{user.displayName}</StyledName>

			<StyledDropdown onClick={handleSignOutUser}>
				<FaChevronDown />
			</StyledDropdown>
		</StylesContainer>
	);
};

export default UserMenu;
