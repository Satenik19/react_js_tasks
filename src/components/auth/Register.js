import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_REQUEST } from '../../app/auth/actions';
import { showToast } from '../../services/toast';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({});

    const registerSuccess = useSelector((state) => state.userData.registerSuccess);
    const registerError = useSelector((state) => state.userData.registerError);

    useEffect(() => {
        if (registerSuccess) {
            navigate('/login');
        }
    }, [registerSuccess]);

    useEffect(() => {
        if (registerError) {
            showToast('error', 'Something went wrong');
        }
    }, [registerError]);

    const submitRegister = (e) => {
        e.preventDefault();
        dispatch({
            type: REGISTER_REQUEST,
            payload: {
                data: values,
            },
        });
    };

    const handleChange = (event) => {
        setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
    };

    return (
      <div className="container auth-wrapper">
        <div className="auth-inner">
          <form>
            <div className="form-group">
              <label>Firstname</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                required
                value={values.firstName || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                required
                value={values.lastName || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={values.email || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                required
                value={values.phoneNumber || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
                value={values.password || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={submitRegister}>Register</button>
            <p className="forgot-password text-right">
              Already registered?
              <Link to="/login"> Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Register;
