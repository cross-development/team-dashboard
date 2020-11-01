//Core
import React from 'react';
//Styles
import { StyledSubLogoDiv, StyledWrapperDiv, StyledTitleH1, StyledTextP } from './Home.styles';

const Home = () => (
	<StyledWrapperDiv>
		<StyledSubLogoDiv />
		<StyledTitleH1>Welcome to Team dashboard</StyledTitleH1>
		<StyledTextP>Please, sign in or sign up to create your own team.</StyledTextP>
	</StyledWrapperDiv>
);

export default Home;
