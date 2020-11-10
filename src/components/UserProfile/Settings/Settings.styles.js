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
	grid-area: settings;
`;

export const StyledTitle = styled.h2`
	grid-area: settingsTitle;
	border-bottom: 3px solid #f5f7fa;
`;

export const StyledGeneralInfo = styled.div`
	grid-area: general;
	border-bottom: 3px solid #f5f7fa;
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
