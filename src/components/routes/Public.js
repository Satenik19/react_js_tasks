import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, children }) => !isAuthenticated ? children : <Navigate to="/home" />;

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
};
export default PublicRoute;
