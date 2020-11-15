//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(12, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'settingsTitle settingsTitle settingsTitle'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm'
		'generalForm generalForm generalForm';
	grid-area: settings;
`;

export const StyledTitle = styled.h2`
	grid-area: settingsTitle;
	color: #98a0a6;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	margin: auto;
`;

export const StyledSettingsContainer = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(11, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'general general general'
		'general general general'
		'general general general'
		'birthday birthday birthday'
		'birthday birthday birthday'
		'location location location'
		'location location location'
		'phone phone phone'
		'phone phone phone'
		'updateBtn updateBtn updateBtn'
		'updateBtn updateBtn updateBtn';
	grid-area: generalForm;
`;

export const StyledAcceptWrap = styled.div`
	grid-area: updateBtn;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledButton = styled.button`
	background-color: #507bfc;
	border: none;
	color: #fff;
	border-radius: 100px;
	padding: 12px 0;
	font-size: 14px;
	cursor: pointer;
	transition: all 250ms linear;
	box-shadow: 0 0 14px #507bfc;
	outline: none;
	width: 40%;

	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(80, 123, 252, 0.8);
	}
`;
