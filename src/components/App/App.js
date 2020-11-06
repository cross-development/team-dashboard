//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import Navbar from '../Navbar';
import TeamsNavigate from '../TeamsNavigate';
import { Layout } from '../Commons';
import { Loader } from '../Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authStateChange } from 'redux/auth/authOperations';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user, loader } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authStateChange());
	}, [dispatch]);

	return (
		<Router>
			<Navbar />

			<Layout>
				{user && <TeamsNavigate />}

				<Suspense fallback={<Loader onLoad={loader} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
