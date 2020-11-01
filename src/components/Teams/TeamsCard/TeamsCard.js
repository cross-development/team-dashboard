//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaHeart, FaEye, FaClipboardList } from 'react-icons/fa';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamsCard.styles';
import { StyledCardItem, StyledLikeBtn, StyledImgWrap, StyledAvatar } from './TeamsCard.styles';

import UserAvatar from 'assets/user.png';

const TeamsCard = () => {
	return (
		<StyledCardItem>
			<StyledLikeBtn type="button" isLiked={true}>
				<FaHeart />
			</StyledLikeBtn>

			<StyledImgWrap>
				<StyledAvatar src={UserAvatar} />
			</StyledImgWrap>

			<StyledName>Marie Walters</StyledName>
			<StyledEmail>mariewalters@gmail.com</StyledEmail>

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
};

TeamsCard.propTypes = {};

export default TeamsCard;
