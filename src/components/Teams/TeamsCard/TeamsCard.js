//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { FaHeart, FaCheck, FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';
import { StyledLikeBtn } from './TeamsCard.styles';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamsCard.styles';
import { StyledCardItem, StyledImgWrap, StyledAvatar, StyledLink } from './TeamsCard.styles';

import UserAvatar from 'assets/user.png';

const TeamsCard = ({ userId, team, onRemoveTeamCard, onChangeLike }) => {
	const { uid, teamId, avatar, name, email } = team;

	// isLiked
	return (
		<StyledCardItem>
			<StyledLikeBtn type="button" isLiked={false} onClick={onChangeLike}>
				<FaHeart />
			</StyledLikeBtn>

			<StyledImgWrap>
				<StyledAvatar src={avatar || UserAvatar} />
			</StyledImgWrap>

			<StyledName>{name}</StyledName>
			<StyledEmail>{email}</StyledEmail>

			<StyledControlWrap>
				{userId === uid ? (
					<StyledLink to={`/teams/${teamId}`}>
						<FaEdit />
						Edit
					</StyledLink>
				) : (
					<StyledButton>
						<FaCheck />
						Join
					</StyledButton>
				)}

				{userId === uid ? (
					<StyledButton type="button" id={teamId} onClick={onRemoveTeamCard}>
						<FaTrashAlt />
						Delete
					</StyledButton>
				) : (
					<StyledLink to={`/teams/${teamId}`}>
						<FaEye />
						View
					</StyledLink>
				)}
			</StyledControlWrap>
		</StyledCardItem>
	);
};

TeamsCard.propTypes = {
	userId: PropTypes.string.isRequired,
	team: PropTypes.shape({
		uid: PropTypes.string.isRequired,
		teamId: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
	onRemoveTeamCard: PropTypes.func.isRequired,
	onChangeLike: PropTypes.func.isRequired,
};

export default TeamsCard;
