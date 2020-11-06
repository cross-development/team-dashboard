//Core
import React from 'react';
//Components
import Home from 'components/Home';
import { Loader } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { user, loader } = useSelector(state => state.auth);

	return (
		<>
			{user && <Loader onLoad={loader} />}

			{!user && loader && <Home />}
		</>
	);
};

export default HomePage;
