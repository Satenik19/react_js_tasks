import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_REQUEST } from '../../app/auth/actions';
import { showToast } from '../../services/toast';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const { registerSuccess, registerError } = useSelector((state) => state.userData);

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
        const isFormValidated = handleValidation();
        if (isFormValidated) {
            dispatch({
                type: REGISTER_REQUEST,
                payload: {
                    data: values,
                },
            });
        }
    };

    const handleValidation = () => {
        const errors = {};
        let formIsValid = true;
        const requiredInputs = ['firstName', 'lastName', 'email', 'password', 'birthday'];

        requiredInputs.forEach((inputName) => {
            if (!values[inputName]) {
                formIsValid = false;
                errors[inputName] = `${inputName} is required`;
            }
        });

        if (typeof values['email'] !== 'undefined') {
            const lastAtPos = values['email'].lastIndexOf('@');
            const lastDotPos = values['email'].lastIndexOf('.');

            if (
                !(
                    lastAtPos < lastDotPos
                    && lastAtPos > 0
                    && values['email'].indexOf('@@') === -1
                    && lastDotPos > 2
                    && values['email'].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors['email'] = 'Email is not valid';
            }
        }

        if (values['password'] && values['password'].trim().length < 6) {
            errors['password'] = 'Password must be at least 6 characters';
        }

        if (values['password'] !== values['confirmPassword']) {
            errors['confirmPassword'] = 'Password and confirm password does not match';
        }

        setErrors({ ...errors });

        return formIsValid;
    };

    const handleChange = (event) => {
        setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
        setErrors({});
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
                value={values.firstName || ''}
                onChange={(e) => handleChange(e)}
              />
              <span className="error-message">{errors.firstName}</span>
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
              <span className="error-message">{errors.lastName}</span>
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
              <span className="error-message">{errors.email}</span>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                className="form-control"
                aria-label="Default select example"
                value={values.gender || ''}
                onChange={(e) => handleChange(e)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Birthday</label>
              <input
                type="date"
                name="birthday"
                className="form-control"
                value={values.birthday || ''}
                onChange={(e) => handleChange(e)}
              />
              <span className="error-message">{errors.birthday}</span>
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
              <span className="error-message">{errors.password}</span>
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={values.confirmPassword || ''}
                onChange={(e) => handleChange(e)}
              />
              <span className="error-message">{errors.confirmPassword}</span>
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
