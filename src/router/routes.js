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
		path: '/all-teams',
		label: 'All Teams',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeamsPage' /* webpackChunkName: "teams-page"*/)),
	},
	{
		path: '/my-teams',
		label: 'My Teams',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeamsPage' /* webpackChunkName: "teams-page"*/)),
	},
	{
		path: '/teams/:teamId',
		label: 'Team',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeamPage' /* webpackChunkName: "team-page"*/)),
	},
	{
		path: '/teams/:teamId/:teammateId',
		label: 'Teammate',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/TeammatePage' /* webpackChunkName: "teammate-page" */)),
	},
	{
		path: '/profile',
		label: 'Profile',
		exact: true,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/ProfilePage' /* webpackChunkName: "profile-page"*/)),
	},
];

export default routes;
