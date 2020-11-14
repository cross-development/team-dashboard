//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLinksWrap, StyledTitle } from './Social.styles';
import { StyledContainer, StyledSocialLinksForm } from './Social.styles';
import { StyledLabel, StyledInput, StyledButton, StyledUpdateWrap } from './Social.styles';

const initialState = {
	facebook: '',
	twitter: '',
	reddit: '',
	instagram: '',
	linkedIn: '',
	gitHub: '',
	website: '',
};

const Social = ({ onUpdateSocialLinks }) => {
	const [socialLinks, setSocialLinks] = useState(initialState);

	const handleChangeLink = ({ target: { name, value } }) =>
		setSocialLinks(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		onUpdateSocialLinks(socialLinks);
		setSocialLinks(initialState);
	};

	return (
		<StyledContainer>
			<StyledTitle>Your External Link</StyledTitle>

			<StyledSocialLinksForm onSubmit={handleSubmit}>
				<StyledLinksWrap>
					<StyledLabel>
						Facebook URL
						<StyledInput
							type="text"
							name="facebook"
							autoComplete="off"
							value={socialLinks.facebook}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						Twitter URL
						<StyledInput
							type="text"
							name="twitter"
							autoComplete="off"
							value={socialLinks.twitter}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						Reddit URL
						<StyledInput
							type="text"
							name="reddit"
							autoComplete="off"
							value={socialLinks.reddit}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						Instagram URL
						<StyledInput
							type="text"
							name="instagram"
							autoComplete="off"
							value={socialLinks.instagram}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						LinkedIn URL
						<StyledInput
							type="text"
							name="linkedIn"
							autoComplete="off"
							value={socialLinks.linkedIn}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						GitHub URL
						<StyledInput
							type="text"
							name="gitHub"
							autoComplete="off"
							value={socialLinks.gitHub}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>

					<StyledLabel>
						Website URL
						<StyledInput
							type="text"
							name="website"
							autoComplete="off"
							value={socialLinks.website}
							onChange={handleChangeLink}
							placeholder="Paste your link here"
						/>
					</StyledLabel>
				</StyledLinksWrap>

				<StyledUpdateWrap>
					<StyledButton type="submit">Update Social Link</StyledButton>
				</StyledUpdateWrap>
			</StyledSocialLinksForm>
		</StyledContainer>
	);
};

Social.propTypes = {
	onUpdateSocialLinks: PropTypes.func.isRequired,
};

export default Social;
