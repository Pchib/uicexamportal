import React from "react";
import { Component } from "react";
import { Link, Redirect, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Playground from "./Playground";
import {
  examFetchBigin,
  examFetchSucceed,
  examFetchFail,
  exitExam,
} from "../actions/actions";
import Auth from "../utils/Auth";
import { asynchorousSendAnswer } from "../actions/actions";
import Header from "./Header/logHeader";
import Footer from "./Footer/Footer";
import "./stylesheets/basecontainer.css";
import image from "./image/favicon.ico";
import Loader from "./Loader/index";


class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 600000,
      timeOver: false,
      check: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.timer === 0) {
        dispatch(exitExam());
        this.setState({ timeOver: true });
        clearInterval(this.interval);
      } else {
        this.setState({
          timer: this.state.timer - 1000,
        });
      }
    }, 1000);
    let subject = Auth.getSubject();
    let Class = Auth.getClass();
    let email = Auth.getEmail();
    let name = Auth.getName();

    let body = {
      user: {
        subject,
        Class,
        email,
        name,
      },
    };

    const { dispatch } = this.props;
    dispatch(examFetchBigin());
    fetch("https://uicexamportal.herokuapp.com/api/exam", {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + Auth.getToken(),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        // select what to display
        let subject = Auth.getSubject();
        let Class = Auth.getClass();

        if (subject === "Agriculture" && Class === "Jss 1") {
          dispatch(examFetchSucceed(res.jss1));
          console.log(res.jss1);
        } else if (subject === "Agriculture" && Class === "Jss 2") {
          dispatch(examFetchSucceed(res.jss2));
          console.log(res.jss2);
        } else if (subject === "Agriculture" && Class === "Jss 3") {
          dispatch(examFetchSucceed(res.jss3));
          console.log(res.jss3);
        } else {
          dispatch(examFetchSucceed(res.payload));
          console.log(res.payload);
        }
      })
      .catch((error) => {
        dispatch(examFetchFail(error));
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({
      examData: null,
    });
  }

  userExitExam = () => {
    let { dispatch, history } = this.props;
    dispatch(exitExam());
    history.replace("/score");
  };

  render() {
    const {
      match,
      isFetching,
      questionPayload,
      didInvalidate,
      submitAnswer,
      data,
      isValidUser,
      history,
      dispatch,
    } = this.props;
    const targetSectionNum = match.params.sectionNum
      ? parseInt(match.params.sectionNum)
      : 1;
    const targetSectionKey = "section" + targetSectionNum;
    const targetQuestionSet = questionPayload[targetSectionKey];

    let PlaygroundPlaceholder;
    if (this.state.timeOver || this.props.isSubmitted) {
      dispatch(asynchorousSendAnswer(questionPayload));
      PlaygroundPlaceholder = history.replace("/score");
    } else {
      if (isFetching) {
        PlaygroundPlaceholder = (
          <div>
            {" "}
            <div style={{ height: "400px" }}>
              {" "}
              <Loader />
            </div>{" "}
          </div>
        );
      } else {
        if (didInvalidate) {
          PlaygroundPlaceholder = (
            <div style={{ height: "400px" }}>
              {" "}
              <div> There is an error when fetching exam infomation!! </div>
            </div>
          );
        } else {
          console.log(data);
          PlaygroundPlaceholder = <Playground payload={data} />;
        }
      }
    }
    setTimeout(() => {}, 1);
        let name = Auth.getName();

    const view = isValidUser ? (
      <div className="base">
        <div className="caption">
          <div
            className="ml-3 mt-3"
            style={{ float: "left", position: "absolute" }}
          >
            Welcome {name} !{" "}
          </div>
          <div className="beflogo mb-2">
            {" "}
            <img className="logo" src={image} alt="sjk" />
          </div>
          <div className="timer mb-4">
            <div className="timer" style={{ color: "black" }}>
              {" "}
              Sir Isaac Exam Portal{" "}
            </div>
            <span className="timer timer1">Time Remaining:</span>
            <span className="timer timer1" style={{ color: "purple" }}>
              {"      "}
              {this.state.timer / 1000}
              {"    "}secs
            </span>
          </div>
          <div className="exit">
            <button className="btn exitbtn" onClick={this.userExitExam}>
              Exit Test
            </button>
          </div>
        </div>
        <div>{PlaygroundPlaceholder}
</div>

        <Footer />
      </div>
    ) : (
      <div className="output">
        <Header />
        <div className="outpage">
          <div>You have left the page</div> <Link to="/"> Login </Link>
        </div>
        <Footer />
      </div>
    );

    return view;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.examData.isFetching,
  didInvalidate: state.examData.didInvalidate,
  data: state.examData.data,
  isValidUser: state.isValidUser,
  questionPayload: state.examData.data,
  isSubmitted: state.scoreData.isSubmitted,
});
// const mapDispatchToProps = (dispatch) => ({
//   submitAnswer: (questionPayload) => {
//     dispatch(asynchorousSendAnswer(questionPayload));
//   },
// });

const BaseContainer = withRouter(connect(mapStateToProps)(Base));
export default BaseContainer;
