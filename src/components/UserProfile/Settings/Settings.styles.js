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

export const StyledGeneralForm = styled.form`
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

export const StyledBirthdayInfo = styled.div`
	grid-area: birthday;
	border-bottom: 3px solid #f5f7fa;
`;

export const StyledLocationInfo = styled.div`
	grid-area: location;
	border-bottom: 3px solid #f5f7fa;
`;

export const StyledPhoneInfo = styled.div`
	grid-area: phone;
	border-bottom: 3px solid #f5f7fa;
`;

export const StyledAcceptWrap = styled.div`
	grid-area: updateBtn;
`;
