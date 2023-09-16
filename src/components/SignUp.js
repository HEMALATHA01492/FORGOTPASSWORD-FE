import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//get username,email,password from USER  Sign up SUCCESS-->LOGIN page
function SignUp (){
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSignUp =(e) => {
    e.preventDefault()
      axios.post('https://forgot-password-be.onrender.com/users/signup',{username,email,password})
      .then(result => {
        console.log(result)
        navigate('/signin')
      })
      .catch( err => console.log(err))

  }
  return (
    <form
      onSubmit={handleSignUp}
      className="signIn container d-flex flex-column gap-1 p-3">
      <h2 className="display-6 text-center">Sign Up</h2>
      <div className="form-group d-flex flex-column gap-1 p-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control m-1"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1 p-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control m-1"
          id="username"
          placeholder="Name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1 p-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control m-1"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <button type="submit" className="btn btn-primary justify-content-center">
        Sign Up
      </button>
      <div className="text-center mt-3">Already have an account?
          <span>
            <Link className="btn text-primary text-decoration-underline fw-bold fs-6" to="/signin">Login</Link>
          </span>
      </div>
    </form>


  );
};

export default SignUp;
