//Database
import firebase from 'firebase';

const uploadTeamAvatarToServer = async ({ avatar }) => {
	const uniquePostId = Date.now().toString();

	await firebase.storage().ref(`teamsAvatars/${uniquePostId}`).put(avatar);

	const processedPhoto = await firebase
		.storage()
		.ref('teamsAvatars')
		.child(uniquePostId)
		.getDownloadURL();

	return processedPhoto;
};

const uploadTeammateAvatarToServer = async ({ avatar }) => {
	const uniquePostId = Date.now().toString();

	await firebase.storage().ref(`teammatesAvatars/${uniquePostId}`).put(avatar);

	const processedPhoto = await firebase
		.storage()
		.ref('teammatesAvatars')
		.child(uniquePostId)
		.getDownloadURL();

	return processedPhoto;
};

const removeAvatarFromServer = async ({ avatarURI }) => {
	await firebase.storage().refFromURL(avatarURI).delete();
};

export { uploadTeamAvatarToServer, uploadTeammateAvatarToServer, removeAvatarFromServer };
