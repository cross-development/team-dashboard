//Core
import React, { useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from 'redux/auth/authOperations';
//Styles
import UserAvatar from 'assets/user.jpg';
import { FaChevronDown } from 'react-icons/fa';
import { StyledMenu, StyledMenuItem, StyledMenuLink } from './UserMenu.styles';
import { StylesContainer, StyledImg, StyledName, StyledDropdown } from './UserMenu.styles';

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { displayName } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleClick = () => setIsOpen(prevState => !prevState);

	const handleSignOutUser = () => dispatch(signOutUser());

	return (
		<StylesContainer>
			<StyledImg src={UserAvatar} />

			<StyledName>{displayName}</StyledName>

			<StyledDropdown onClick={handleClick}>
				<FaChevronDown />

				{isOpen && (
					<StyledMenu>
						<StyledMenuItem>
							<StyledMenuLink to="/profile">Profile</StyledMenuLink>
						</StyledMenuItem>
						<StyledMenuItem>
							<StyledMenuLink to="/" onClick={handleSignOutUser}>
								Sign Out
							</StyledMenuLink>
						</StyledMenuItem>
					</StyledMenu>
				)}
			</StyledDropdown>
		</StylesContainer>
	);
};

export default UserMenu;

// <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//   Open Menu
// </Button>
// <Menu
//   id="simple-menu"
//   anchorEl={anchorEl}
//   keepMounted
//   open={Boolean(anchorEl)}
//   onClose={handleClose}
// >
//   <MenuItem onClick={handleClose}>Profile</MenuItem>
//   <MenuItem onClick={handleClose}>My account</MenuItem>
//   <MenuItem onClick={handleClose}>Logout</MenuItem>
// </Menu>
