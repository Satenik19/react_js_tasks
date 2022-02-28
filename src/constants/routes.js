import React from 'react';
import CityList from '../components/city/List';
import CurrentCityWeather from '../components/currentCity/Weather';
import DailyWeather from '../components/weather/Daily';
import Posts from '../components/posts/List';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

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
