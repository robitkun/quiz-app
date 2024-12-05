import React from 'react';
import AnswerItem from './AnswerItem';

const Answer = ({ answers, selectAnswer, onAnswer }) => {
  return (
    <div className="answer">
      {answers.map((answer, index) => {
        const isSelected = selectAnswer === index;
        const className = isSelected ? 'selected' : '';
        return (
          <AnswerItem
            key={index}
            answer={answer.text}
            onAnswer={() => onAnswer(index)}
            isCorrect={answer.isCorrect}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default Answer;
