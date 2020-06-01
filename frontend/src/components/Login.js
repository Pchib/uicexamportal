import { Link, Redirect , Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {readEmail, readPassword, asynchorousFetchUserDB} from '../actions/actions'
import Header from "./Header/logHeader";
import "./stylesheets/login.css";

import React, { useState } from "react";
import { Alert } from "reactstrap";




const mapStateToProps = (state)=>{
    return {
        isValidUser: state.isValidUser,
        email: state.email,
        password: state.password,
        prompt: state.userData.data.message
    };
}


const mapDispatchToProps = (dispatch)=>{
    return {
        loginHandler: (email, password)=>{
            dispatch(asynchorousFetchUserDB(email, password));
        },
        readEmail: (e)=>{
            dispatch(readEmail(e.target.value));
        },
        readPassword: (e)=>{
            dispatch(readPassword(e.target.value));
        }
    }
}
  //  const [visible, setVisible] = useState(true);

  //  const onDismiss = () => setVisible(false);


const LoginView =({isValidUser, email, password, prompt, readEmail, readPassword, loginHandler})=>{
    const nextPage = isValidUser ?  <Redirect replace={true} to="/exam" /> : " " ;

    return (
      <div className="output">
        <Header />
        <div className="container">
          <div className="form-signin">
            <h2 className="form-signin-heading">Log In</h2>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="input Email"
              className="form-control input"
              onBlur={readEmail}
              name="email"
              placeholder="input email"
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control input"
              onBlur={readPassword}
              name="password"
              placeholder="input password"
            />
            <button
              className="btn btn-lg btn-primary btn-block mb-4 button"
              to="/auth/signup"
              onClick={() => {
                loginHandler(email, password);
              }}
            >
              {" "}
              Login{" "}
            </button>
            <div>
              <h1 className="h1">
                {" "}
                Don't have an account ?{" "}
                <Link style={{ color: "purple" }} to="/auth/signup">
                  {" "}
                  Sign Up{" "}
                </Link>
              </h1>
            </div>
            {nextPage}
            <p>
              {prompt ? <div className="btn btn-danger">{prompt}</div> : ""}
            </p>
          </div>
        </div>
      </div>
    );
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView)
export default LoginContainer
