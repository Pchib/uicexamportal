import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import fetch from 'cross-fetch'
import Auth from '../utils/Auth'
import {resolve} from '../actions/actions'
import Header from "./Header/logHeader";
import "./stylesheets/login.css";
import { Alert } from "reactstrap";



const SignUp = ({history, prompt, dispatch})=>{
    let userInfo = {
        fame: "",
        email: "",
        password: "",
        Class:"",
        subject:"",
        visible:true

    }
     const readName = (e) => {
       userInfo.fame = e.target.value;
      
     };
    const readEmail = (e)=>{
        userInfo.email = e.target.value;
    }

    const readPassword = (e)=>{
        userInfo.password = e.target.value;
    }
    
    const readSubject = (e) => {
      userInfo.subject = e.target.value;
            // console.log(e.target.value);

    };

    const readClass = (e) => {
      userInfo.Class = e.target.value;
            // console.log(e.target.value);

    };


    const submitHandler= (e)=>{
        e.preventDefault();
        if( userInfo.email==="" || userInfo.password===""||userInfo.fame===""|| userInfo.Class==="" || userInfo.subject ==="" ){
            alert("Error: All form must be filled");
            return;
        }
        console.log(userInfo);
        
        fetch("https://uicexamportal.herokuapp.com/auth/signup", {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(
            (res) => res.json()
        ).then(
            (res)=>{
                if( !res.status ) alert(res.message)
                dispatch( resolve(res) )
                console.log(res.Class);
                
                Auth.authenticateUser(res.token, res.email,res.subject,res.Class, res.name)
                if(res.token){
                    console.log(Auth.getToken());
                    history.push('/exam')
                }else{
                    return;
                }

            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    }


    return (
      <div className="output">
        <Header />
        <div className="container">
          <form className="form-signin" onSubmit={submitHandler} method="POST">
            <h2 className="form-signin-heading">Sign Up </h2>
           <h5> Please note your result and answers will be sent to your email address</h5>
            <label htmlFor="inputEmail" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              id="inputname"
              className="form-control input"
              onBlur={readName}
              name="name"
              placeholder="input name"
              required
              autoFocus
            />
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
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
              placeholder="New password"
            />
            <label>Subject:</label>
            <select
              id="inputPassword"
              className="form-control"
              onBlur={readSubject}
              name="subject"
            >
              <option placeholder="What subject"></option>

              <option>Random</option>
              <option>Agriculture</option>
            </select>

            <label>Class:</label>
            <select
              id="inputPassword"
              className="form-control mb-4"
              onBlur={readClass}
              name="subject"
            >
              <option></option>
              <option>Random</option>
              <option>Jss 1</option>
              <option>Jss 2</option>
              <option>Jss 3</option>
            </select>

            <button className="btn btn-lg mb-4 btn-primary btn-block">
              {" "}
              Signup{" "}
            </button>
            <div>
              <h1 className="h1">
                {" "}
                Have an account ?{" "}
                <Link style={{ color: "purple" }} to="/">
                  {" "}
                  Log In{" "}
                </Link>
              </h1>
            </div>
          </form>

          {prompt ? <div className="btn btn-danger">{prompt}</div> : ""}
        </div>
      </div>
    );
}

const mapStateToProps = (state)=>({ prompt: state.userData.data.message })
const SignUpContainer = withRouter( connect(mapStateToProps)(SignUp) )
export default SignUpContainer
