//Core
import React from 'react';
//Components
import Home from 'components/Home';
import { Loader } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { uid, loading } = useSelector(state => state.auth);

	return (
		<>
			{uid && <Loader onLoad={loading} />}

			{!uid && loading && <Home />}
		</>
	);
};

export default HomePage;
