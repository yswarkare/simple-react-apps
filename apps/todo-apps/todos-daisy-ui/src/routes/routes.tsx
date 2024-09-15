import { lazy } from 'react';
import paths from './path';

const LogIn = lazy(() => import('../pages/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const DefaultPage = lazy(() => import('../layouts/DefaultPage'));
const HomePage = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));

const routes = [
	{
		path: paths.base,
		element: <DefaultPage />,
		children: [
			{
				path: paths.home,
				element: <HomePage />,
			},
			{
				path: paths.dashboard,
				element: <Dashboard />,
			},
			{
				path: paths.profile,
				element: <Profile />,
			},
			{
				path: paths.login,
				element: <LogIn />,
			},
			{
				path: paths.signup,
				element: <SignUp />,
			},
		],
	},
	{
		path: '/*',
		element: <ErrorPage errors={['404 Page Not Found!']} />,
	},
];

export default routes;
