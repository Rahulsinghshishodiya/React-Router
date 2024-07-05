import React from "react";

function Login() {
  return (
    <>
      <div className="flex possition-fixed">
        <div className="user-detail">
          <label>Email</label>
          <input className="type-email, placeholder-Enter Your Email " />
        </div>
        <div>
          <label>Password</label>
          <input className="type-password placeholder-Enter Password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Login;
