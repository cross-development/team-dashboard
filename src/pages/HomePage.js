//Core
import React from 'react';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
import { Loader } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { uid, loading } = useSelector(state => state.auth);

	return (
		<>
			{!uid && loading && <Loader onLoad={true} />}

			{!uid && <Home />}

			{uid && <Main />}
		</>
	);
};

export default HomePage;

// {!uid && loading && <Loader onLoad={true} />}

// {!uid && <Home />}

// {uid && <Main />}
