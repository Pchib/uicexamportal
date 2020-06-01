import React from "react";
import SideNav from "./SideNav";
import Sponsor from "./sonsor";

import Section from "./Section";
import {
  Container,
  Row,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import Header from "./Header/mainHeader";
import "./stylesheets/basecontainer.css";

const Playground = () => {
  const instruction = () => (
    <div>
      <div className="container">
        <Toast>
          <ToastHeader className="cards1">
            {" "}
            ><h1> Exam instruction </h1>
          </ToastHeader>
        </Toast>{" "}
        <Card className="cards">
          <h2>
            <p>
              You have 1min to read all exam instructions and 9 mins to finish
              all question then click the submit button
            </p>
          </h2>
        </Card>
        <Card className="mt-2 cards">
          <h2>
            <p>Click on Section 1 on the Nav Bar to see questions</p>
          </h2>
        </Card>
        <Card className="mt-2 cards">
          <h2>
            {" "}
            <p>
              You can skip questions if you would like by clicking the question
              button.
            </p>
          </h2>
        </Card>
        <Card className="mt-2 cards">
          <h2>
            {" "}
            <p>
              Leaving the current page while exam has started might
              automatically close the exam
            </p>
          </h2>
        </Card>
      </div>
    </div>
  );

  return (
    <div>
      <Row>
        <Col xs="8">
          <div className="exam mt-5">
            <Route exact path="/exam" component={instruction} />{" "}
            <Route path="/exam/:sectionNum" component={Section} />
            <Sponsor />
          </div>
        </Col>
        <Col xs="4">
          <div className="Nav1">
            <SideNav />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Playground;
