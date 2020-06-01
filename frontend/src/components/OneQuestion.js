import React from "react";
import { connect } from "react-redux";
import { setAnswer } from "../actions/actions";
import { Container, Row, Col } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const OneQuestion = ({ id, type, question, thisQuestion, dispatch }) => {
  const caption = question.caption;
  const url = type === 2 ? question.url : "";
  const options = question.options;

  const embedVideo =
    type === 2 ? (
      <iframe title="Title" width="420" height="345" src={url}></iframe>
    ) : (
      <div></div>
    );

  const setAnswerHandler = (e) => {
    dispatch(setAnswer(id, type, e.target.value));
  };

  console.log(thisQuestion);
  const oldAnswer = thisQuestion.answer;

  const optionItems = options ? (
    options.map((item, index) => (
      <div  key={index}>
        <Container className="mt-3">
          <Row>
            <Col xs="5">
              <div style={{ textAlign: "right" }}>
                <input
                  onClick={setAnswerHandler}
                  type="radio"
                  name={id + "-" + type}
                  defaultChecked={item === oldAnswer}
                  value={item}
                />
              </div>
            </Col>
            <Col xs="7">
              <div style={{ textAlign: "left" }}>{item}</div>
            </Col>
          </Row>
        </Container>
      </div>
    ))
  ) : (
    <div>
      <textarea
        onBlur={setAnswerHandler}
        type="radio"
        name={id + "-" + type}
        defaultValue={oldAnswer}
      ></textarea>
    </div>
  );
  const optionsView = <div> {optionItems} </div>;
  return (
    <div>
      <div className={"question" + type + "-" + id}>
        <h3> {caption} </h3>
        {embedVideo}
        <div classsname="col-md-6"> {optionsView}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const section = "section" + ownProps.type;
  const thisQuestion = state.examData.data[section].find(
    (item) => item.id === ownProps.id
  );

  return { thisQuestion: thisQuestion };
};

const OneQuestionContainer = connect(mapStateToProps)(OneQuestion);
export default OneQuestionContainer;
