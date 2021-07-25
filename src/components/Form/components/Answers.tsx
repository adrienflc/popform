/* eslint-disable react/forbid-prop-types */
import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import '../index.css';

type Props = {
  answers: Array<string>;
};

const Answers: FunctionComponent<Props> = ({ answers }) => {
  const answersToRender = answers.map((answer) => <button key={answer} type="button" className="answer-button">{answer}</button>);
  return (<>{answersToRender}</>);
};

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
};

export default Answers;
