import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../../services/toast';
import { LOGIN_USER_REQUEST } from '../../app/auth/actions';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginSuccess = useSelector((state) => state.userData.loginSuccess);
    const loginError = useSelector((state) => state.userData.loginError);

    useEffect(() => {
        if (loginSuccess) {
            console.log('success');
            navigate('/home');
        }
    }, [loginSuccess]);

    useEffect(() => {
        if (loginError) {
            showToast('error', 'Something went wrong');
        }
    }, [loginError]);

    const submitLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN_USER_REQUEST,
            payload: {
                email,
                password,
            },
        });
    };

    return (
      <div className="container auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={(e) => submitLogin(e)}>Login</button>
            <p className="forgot-password text-right">
              <Link to="/register"> Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Login;
