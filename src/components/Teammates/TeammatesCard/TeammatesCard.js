//Core
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { FaHeart, FaEye, FaClipboardList, FaCommentDots } from 'react-icons/fa';
import { StyledName, StyledEmail, StyledControlWrap, StyledLink } from './TeammatesCard.styles';
import { StyledCardItem, StyledLikeBtn, StyledImgWrap, StyledAvatar } from './TeammatesCard.styles';
//Public assets
const defaultAvatar = `${process.env.PUBLIC_URL}/avatars/unnamed.png`;

const TeammatesCard = ({ teammateId, teammate, onChangeLike }) => {
	const { name, email, avatar, isLiked, userId } = teammate;

	const { uid } = useSelector(state => state.auth);
	const { teamId } = useParams();

	return (
		<StyledCardItem>
			<StyledLikeBtn type="button" isLiked={isLiked} onClick={onChangeLike}>
				<FaHeart />
			</StyledLikeBtn>

			<StyledImgWrap>
				<StyledAvatar src={avatar || defaultAvatar} />
			</StyledImgWrap>

			<StyledName>{name}</StyledName>
			<StyledEmail>{email}</StyledEmail>

			<StyledControlWrap>
				{userId === uid ? (
					<StyledLink to={`/teams/${teamId}/${teammateId}/assign`}>
						<FaClipboardList />
						Assign
					</StyledLink>
				) : (
					<StyledLink to={`/teams/${teamId}/${teammateId}/messages`}>
						<FaCommentDots />
						Message
					</StyledLink>
				)}

				<StyledLink to={`/teams/${teamId}/${teammateId}`}>
					<FaEye />
					View
				</StyledLink>
			</StyledControlWrap>
		</StyledCardItem>
	);
};

TeammatesCard.propTypes = {
	teammate: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		isLiked: PropTypes.bool.isRequired,
		userId: PropTypes.string.isRequired,
	}).isRequired,
	teammateId: PropTypes.string.isRequired,
	onChangeLike: PropTypes.func.isRequired,
};

export default TeammatesCard;
