//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaHeart, FaEye, FaClipboardList } from 'react-icons/fa';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamCard.styles';
import { StyledCardItem, StyledLikeBtn, StyledImgWrap, StyledAvatar } from './TeamCard.styles';

import UserAvatar from 'assets/user.png';

const TeamCard = ({ name, email, avatar, isLiked, onChangeLike }) => (
	<StyledCardItem>
		<StyledLikeBtn type="button" isLiked={isLiked} onClick={onChangeLike}>
			<FaHeart />
		</StyledLikeBtn>

		<StyledImgWrap>
			<StyledAvatar src={avatar || UserAvatar} />
		</StyledImgWrap>

		<StyledName>{name}</StyledName>
		<StyledEmail>{email}</StyledEmail>

		<StyledControlWrap>
			<StyledButton>
				<FaClipboardList />
				Assign
			</StyledButton>

			<StyledButton>
				<FaEye />
				View
			</StyledButton>
		</StyledControlWrap>
	</StyledCardItem>
);

TeamCard.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	isLiked: PropTypes.bool.isRequired,
	onChangeLike: PropTypes.func.isRequired,
};

export default TeamCard;
