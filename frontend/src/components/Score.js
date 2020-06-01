import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header/logHeader";
import Footer from "./Footer/Footer";
import Sponsor from "./sonsor";


const Score = ({ score }) => {
  return (
    <div>
      <div>
        <div className="output2 outpage">
          <Header />
          You Scored :
          <span style={{ color: "purple" }}>
            {"    "}
            {score} / 10
          </span>
          <div>
            <div>
              {score < 5
                ? "You need to get an average score to view the answers : Try again"
                : "Answers as been sent to your email address"}
            </div>
            <Link
              style={{ color: "purple" }}
              to="/"
              className="btn btn-primary"
              target="_blank 
                                                                                                                                                  "
            >
              {" "}
              Log In{" "}
            </Link>
          </div>
          <Sponsor />
        </div>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ score: state.scoreData.score });

const ScoreContainer = withRouter(connect(mapStateToProps)(Score));
export default ScoreContainer;
