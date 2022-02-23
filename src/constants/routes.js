import React from 'react';
import CityList from '../components/city/List';
import CurrentCityWeather from '../components/currentCity/Weather';
import DailyWeather from '../components/weather/Daily';
import Welcome from '../components/home/Welcome';

export const routes = [
    {
        path: '/',
        component: <Welcome />,
    },
    {
        path: '/city',
        component: <CityList />,
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
    },
    {
        path: '/daily',
        component: <DailyWeather />,
    },
    {
        path: '/favourites',
        component: <CityList />,
    },
    {
        path: '/favourites/:title',
        component: <CityList />,
    },
];
