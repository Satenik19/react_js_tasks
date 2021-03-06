import React from 'react';
import CityList from '../components/city/List';
import CurrentCityWeather from '../components/currentCity/Weather';
import DailyWeather from '../components/weather/Daily';
import Posts from '../components/post/List';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import SideBar from '../components/profile/SideBar';
import ChangePassword from '../components/profile/ChangePassword';
import CoverPhoto from '../components/profile/CoverPhoto';

export const routes = [
    {
        path: '/',
        component: <Posts />,
    },
    {
        path: '/login',
        component: <Login />,
        auth: false,
    },
    {
        path: '/register',
        component: <Register />,
        auth: false,
    },
    {
        path: '/posts',
        component: <Posts />,
        auth: true,
    },
    {
        path: '/profile',
        component: <SideBar />,
        auth: true,
    },
    {
        path: '/change-password',
        component: <ChangePassword />,
        auth: true,
    },
    {
        path: '/cover',
        component: <CoverPhoto />,
        auth: true,
    },
    {
        path: '/city',
        component: <CityList />,
        auth: true,
    },
    {
        path: '/weather',
        component: <CurrentCityWeather />,
        element: `${CurrentCityWeather}`,
        children: [
            {
                path: ':city',
                component: <CurrentCityWeather />,
            },
        ],
        auth: true,
    },
    {
        path: '/daily',
        component: <DailyWeather />,
        auth: true,
    },
    {
        path: '/favourites',
        component: <CityList />,
        auth: true,
    },
    {
        path: '/favourites/:title',
        component: <CityList />,
        auth: true,
    },
];
