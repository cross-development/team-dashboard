//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamsCard.styles';
import { StyledCardItem, StyledImgWrap, StyledAvatar } from './TeamsCard.styles';

import UserAvatar from 'assets/user.png';

const TeamsCard = ({ name, email, avatar }) => (
	<StyledCardItem>
		<StyledImgWrap>
			<StyledAvatar src={avatar || UserAvatar} />
		</StyledImgWrap>

		<StyledName>{name}</StyledName>
		<StyledEmail>{email}</StyledEmail>

		<StyledControlWrap>
			<StyledButton>
				<FaCheck />
				Join
			</StyledButton>

			<StyledButton>
				<FaTrashAlt />
				Delete
			</StyledButton>
		</StyledControlWrap>
	</StyledCardItem>
);

TeamsCard.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
};

export default TeamsCard;
