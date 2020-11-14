//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLabel, StyledInput } from './Social.styles';
import { StyledContainer, StyledTitle, StyledSocialLinks } from './Social.styles';

const Social = props => {
	return (
		<StyledContainer>
			<StyledTitle>Your External Link</StyledTitle>

			<StyledSocialLinks>
				<StyledLabel>
					Facebook URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					Twitter URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					Reddit URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					Instagram URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					LinkedIn URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					GitHub URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>

				<StyledLabel>
					Website URL
					<StyledInput placeholder="Paste your link here" />
				</StyledLabel>
			</StyledSocialLinks>
		</StyledContainer>
	);
};

Social.propTypes = {};

export default Social;
