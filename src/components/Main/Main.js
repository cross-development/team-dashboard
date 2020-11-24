//Core
import React from 'react';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Main.styles';

const Main = () => (
	<StyledWrapperDiv>
		<StyledSubLogoDiv />

		<StyledTitleH1>No team selected</StyledTitleH1>

		<StyledTextP>
			To create a team you should select an "All Teams" from the top navigation. If you already have
			a team you should select a "My team" there to edit the information about them.
		</StyledTextP>
	</StyledWrapperDiv>
);

export default Main;
