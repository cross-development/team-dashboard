//Core
import React from 'react';
//Components
import Home from 'components/Home';
import { Loader } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { user } = useSelector(state => state.auth);
	const isLoading = useSelector(state => state.loader);

	return (
		<>
			{user && <Loader onLoad={isLoading} />}

			{!user && isLoading && <Home />}
		</>
	);
};

export default HomePage;
