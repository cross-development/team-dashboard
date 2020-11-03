//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	{
		path: '/teams',
		label: 'Teams',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeamsPage' /* webpackChunkName: "teams-page"*/)),
	},
	{
		path: '/teammates',
		label: 'Teammates',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeammatesPage' /* webpackChunkName: "teammates-page"*/)),
	},
	{
		path: '/teammates/:teammateId',
		label: 'Teammate',
		exact: false,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeamMemberPage' /* webpackChunkName: "teammate-page" */)),
	},
];

export default routes;
