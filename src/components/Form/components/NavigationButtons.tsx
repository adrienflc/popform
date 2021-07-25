import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

type Props = {
  handleQuestionDirection: (direction :number) => void;
};

const NavigationButtons: FunctionComponent<Props> = ({ handleQuestionDirection }) => (
  <div className="nav-buttons">
    <button
      type="button"
      className="button"
      onClick={() => handleQuestionDirection(1)}
    >
      Back
    </button>
    <button
      type="button"
      className="button"
      onClick={() => handleQuestionDirection(2)}
    >
      Next
    </button>
  </div>
);

NavigationButtons.propTypes = {
  handleQuestionDirection: PropTypes.func.isRequired,
};

export default NavigationButtons;
