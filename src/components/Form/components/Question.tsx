import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import '../index.css';

type Props = {
  question: string;
  body: string;
  questionNb: number;
};

const Question: FunctionComponent<Props> = ({ question, body, questionNb }) => (
  <div>
    <p className="question-title">
      <span>{`${questionNb + 1} | `}</span>
      {question}
    </p>
    <p className="question-body">{body}</p>
  </div>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  questionNb: PropTypes.number.isRequired,
};

export default Question;
