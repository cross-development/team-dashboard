//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledContainer, StyledSocialLinksWrap } from './Social.styles';
import { StyledTitle, StyledLabel, StyledInput } from './Social.styles';
//Data
import socialLinksList from 'data/socialLinks.json';

const Social = ({ onChangeSocialLinks, socialLinks }) => {
	// console.log('socialLinks', socialLinks);
	return (
		<StyledContainer>
			<StyledTitle>Your External Link</StyledTitle>

			<StyledSocialLinksWrap>
				{socialLinksList.map(({ title, name }) => (
					<StyledLabel key={name}>
						{title}
						<StyledInput
							type="text"
							name={name}
							autoComplete="off"
							value={socialLinks[name] || ''}
							onChange={onChangeSocialLinks}
							placeholder="Paste your link here"
						/>
					</StyledLabel>
				))}
			</StyledSocialLinksWrap>
		</StyledContainer>
	);
};

Social.propTypes = {
	onChangeSocialLinks: PropTypes.func.isRequired,
	socialLinks: PropTypes.shape({
		facebook: PropTypes.string.isRequired,
		twitter: PropTypes.string.isRequired,
		reddit: PropTypes.string.isRequired,
		instagram: PropTypes.string.isRequired,
		linkedIn: PropTypes.string.isRequired,
		gitHub: PropTypes.string.isRequired,
		website: PropTypes.string.isRequired,
	}).isRequired,
};

export default Social;
