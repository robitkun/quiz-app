const QuestionList = ({
  totalQuiz,
  onSelectQuestion,
  selectAnswer,
  selectQuestion,
}) => {
  return (
    <div className="question-list">
      {totalQuiz.map((el, index) => {
        const sudahTerjawab = selectAnswer[index] !== null;
        const selectQuest = selectQuestion === index;
        const isClass = selectQuest ? 'active' : '';
        const buttonClass = sudahTerjawab ? 'answered' : '';
        return (
          <button
            key={index}
            onClick={() => onSelectQuestion(index)}
            className={isClass + buttonClass}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionList;
