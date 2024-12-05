const AnswerItem = ({ answer, onAnswer, index, className }) => {
  return (
    <button
      onClick={() => onAnswer(index)}
      className={`answer-item ${className}`}
    >
      {answer}
    </button>
  );
};

export default AnswerItem;
