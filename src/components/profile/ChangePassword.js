import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_PASSWORD_REQUEST } from '../../app/auth/actions';
import { showToast } from '../../services/toast';
import SideBar from './SideBar';

function Main() {
    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmNewPassword] = useState('');
    const [errors, setErrors] = useState({});

    const { changePasswordSuccess, changePasswordError } = useSelector((state) => state.userData);

    const submitChangePassword = (e) => {
        e.preventDefault();
        const isFormValidated = handleValidation();
        if (isFormValidated) {
            dispatch({
                type: CHANGE_PASSWORD_REQUEST,
                payload: {
                    password: newPassword,
                },
            });
        }
    };

    useEffect(() => {
        if (changePasswordSuccess) {
            showToast('success', 'Password is changed successfully');
        }
    }, [changePasswordSuccess]);

    useEffect(() => {
        if (changePasswordError) {
            showToast('error', 'Something went wrong');
        }
    }, [changePasswordError]);

    const handleValidation = () => {
        const errors = {};
        let formIsValid = true;

            if (!newPassword || !confirmPassword) {
                formIsValid = false;
                errors['password'] = 'Password is required';
            }

        if (newPassword && newPassword.trim().length < 6) {
            errors['password'] = 'Password must be at least 6 characters';
        }

        if (newPassword !== confirmPassword) {
            errors['confirmPassword'] = 'Password and confirm password does not match';
        }

        setErrors({ ...errors });

        return formIsValid;
    };

    return (
      <div>
        <SideBar />
        <div className="auth-wrapper container">
          <form className="auth-inner">
            <div className="form-group">
              <label>New password</label>
              <input
                type="text"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span className="error-message">{errors.password}</span>
            </div>
            <div className="form-group">
              <label>Confirm new password</label>
              <input
                type="text"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <span className="error-message">{errors.confirmPassword}</span>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={(e) => submitChangePassword(e)}
            >Save
            </button>
          </form>
        </div>
      </div>
    );
}

export default Main;
