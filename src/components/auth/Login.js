import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitRegister = (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_USER_REQUEST',
            payload: {
                email,
                password,
                navigate,
            },
        });
    };

    return (
      <form>
        <div>
          <label>Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={submitRegister}>Login</button>
      </form>
    );
}

export default Login;
