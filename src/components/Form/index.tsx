/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-nested-ternary */
import React, { useState, useCallback, useEffect } from 'react';
import Question from './components/Question';
import NavigationButton from './components/NavigationButtons';
import Answers from './components/Answers';
import useEventListener from '../../utils/addEventListener';

import questions from '../../questions.json';

import './index.css';

const Form = () => {
  const [questionNb, setQuestionNb] = useState(0);
  const [fade, setFade] = useState(0);

  const handler = useCallback(
    ({ key, deltaY }) => {
      if (key === 'ArrowDown' || deltaY < 0) {
        setFade(2);
      } else if (key === 'ArrowUp' || deltaY > 0) {
        setFade(1);
      }
    },
    [],
  );

  // Add event listener using our hook
  useEventListener('keydown', handler);
  useEventListener('mousewheel', handler);

  const handleAnimation = () => {
    if (questionNb > 0 && fade === 1) {
      setQuestionNb(questionNb - 1);
    } else if (questionNb < (questions.length - 1) && fade === 2) {
      setQuestionNb(questionNb + 1);
    }
  };

  return (
    <>
      <div
        onAnimationStart={() => handleAnimation()}
        onAnimationEnd={() => setFade(0)}
        className={`form-body ${fade === 1 ? 'fade-in' : (fade === 2 ? 'fade-out' : '')}`}
      >
        <Question
          body={questions[questionNb].body}
          question={questions[questionNb].question}
          questionNb={questionNb}
        />
        <Answers answers={questions[questionNb].answers} />
      </div>
      <NavigationButton handleQuestionDirection={(direction :number) => setFade(direction)} />
    </>
  );
};

export default Form;
