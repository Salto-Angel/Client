import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Helpful = props => {
  const [yesButton, setYesButton] = useState(true);
  let helpfulness;
  let route;

  if (props.answer) {
    helpfulness = props.answer.helpfulness;
    route = `http://3.134.102.30/qa/answer/${props.answer.answer_id}/helpful`;
  } else {
    helpfulness = props.question.question_helpfulness;
    route = `http://3.134.102.30/qa/question/${props.question.question_id}/helpful`;
  }

  const handleYesClick = () => {
    axios
      .put(route)
      .then(() => {
        increment();
      })
      .catch(err => console.error(err));
  };

  const increment = () => {
    setYesButton(false);
  };

  return (
    <span>
      <span>Helpful? </span>
      {yesButton ? (
        <u onClick={handleYesClick} style={{ cursor: 'pointer' }}>
          Yes
        </u>
      ) : (
        <u style={{ cursor: 'pointer' }}>Yes</u>
      )}
      {yesButton ? (
        <span> ({helpfulness})</span>
      ) : (
        <span> ({++helpfulness})</span>
      )}
    </span>
  );
};

export default Helpful;