//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useDispatch } from 'react-redux';
import { updateTeam } from 'redux/teams/teamsOperations';
//Styles
import { FaHeart, FaCheck, FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';
import { StyledLikeBtn } from './TeamsCard.styles';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamsCard.styles';
import { StyledCardItem, StyledImgWrap, StyledAvatar, StyledLink } from './TeamsCard.styles';
//Public assets
const defaultAvatar = `${process.env.PUBLIC_URL}/avatars/users-group.png`;

const TeamsCard = ({ userId, team = {}, onRemoveTeamCard }) => {
	const { uid, teamId, avatar, name, email, isLiked } = team;

	const dispatch = useDispatch();

	const handleChangeLike = () => dispatch(updateTeam({ teamId, isTeamLiked: !isLiked }));

	return (
		<StyledCardItem>
			<StyledLikeBtn type="button" isLiked={isLiked} onClick={handleChangeLike}>
				<FaHeart />
			</StyledLikeBtn>

			<StyledImgWrap>
				<StyledAvatar src={avatar || defaultAvatar} />
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
};

export default TeamsCard;
