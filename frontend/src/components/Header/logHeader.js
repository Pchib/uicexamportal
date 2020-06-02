import React, { Component } from "react";
import "./stylesheet/logheader.css";
import image from "../image/favicon.ico";

export default class logHeader extends Component {
  render() {
    return (
      <div className="container1">
        <div className="container2">
          <div className="container3">
            <div className="beflogo mb-2">
              <img className="logo" src={image} alt="sjk" />
            </div>
            <h2 className="form-signin-heading">Online Exam Portal</h2>

            <div className="inner">
              <h1 className="output"></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
