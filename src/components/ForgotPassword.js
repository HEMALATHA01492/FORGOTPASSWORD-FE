import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

//get EMAIL from user -->send mail to reset password 
function  ForgotPassword() {
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  const handleForgot =(e) => {
    e.preventDefault()
      axios.put('https://forgot-password-be.onrender.com/users/forgot',{email})
      .then(result => {
        console.log(result)
        navigate('/mail')
      })
      .catch( err => console.log(err))

  }
  return (
    <form
      onSubmit={handleForgot}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-center">Forgot Password</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="userName">Email</label>
        <input
          type="email"
          className="form-control"
          id="userName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email here"
        />
        <small className="form-text text-muted"></small>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Mail
      </button>
      </form>
  );
};

export default ForgotPassword;
