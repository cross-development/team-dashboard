//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeTeam } from 'redux/teams/teamsOperations';
//Styles
import { FaCheck, FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';
import { StyledName, StyledEmail, StyledControlWrap, StyledButton } from './TeamsCard.styles';
import { StyledCardItem, StyledImgWrap, StyledAvatar, StyledLink } from './TeamsCard.styles';

import UserAvatar from 'assets/user.png';

const TeamsCard = ({ name, email, avatar, uid, teamId }) => {
	const { uid: userId } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const removeTeamCard = ({ target: { id: teamId } }) => dispatch(removeTeam({ teamId }));

	return (
		<StyledCardItem>
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
					<StyledButton type="button" id={teamId} onClick={removeTeamCard}>
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
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	teamId: PropTypes.string.isRequired,
};

export default TeamsCard;
