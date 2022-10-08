import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";
function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          className="loginScreen__logo"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more</h1>
            <h2>Watch anywhere.Cancel at anytime</h2>
            <h3>
              Ready to watch?Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  REGISTER NOW
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
