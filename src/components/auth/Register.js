import React from 'react';

function Register() {
    const submitRegister = (e) => {
        e.preventDefault();
    };
    return (
      <form>
        <div>
          <label>Firstname</label>
          <input type="text" required />
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Passwrd</label>
          <input type="password" required />
        </div>
        <button type="submit" onClick={submitRegister}>Register</button>
      </form>
    );
}

export default Register;
