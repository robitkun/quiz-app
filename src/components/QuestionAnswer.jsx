import { useState, useEffect } from 'react';
import Answer from './Answer';
import Question from './Question';
import api from '../utils/api';
import QuestionList from './QuestionList';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const QuestionAnswer = () => {
  const [currIndexQuestion, setCurrIndexQuestion] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);
  const [selectAnswer, setSelectAnswer] = useState([]);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      try {
        const data = await api.getQuestion('category=React');
        setData(data);
        setSelectAnswer(Array(data.length).fill(null));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, []);

  const currQuestion = datas[currIndexQuestion];
  const currAnswers = currQuestion?.answers;
  const correctAnswers = currQuestion?.correct_answers;

  const prepareAnswers = () => {
    if (!currAnswers || !correctAnswers) return [];
    return Object.keys(currAnswers)
      .filter((key) => currAnswers[key] !== null)
      .map((key) => ({
        text: currAnswers[key],
        isCorrect: correctAnswers[`${key}_correct`] === 'true',
      }));
  };

  const calculateScore = () => {
    const calculatedScore = selectAnswer.reduce((acc, selectedIndex) => {
      if (selectedIndex === null) return acc;

      const answers = prepareAnswers();

      if (selectedIndex >= 0 && selectedIndex < answers.length) {
        const isCorrect = answers[selectedIndex].isCorrect;
        if (isCorrect) {
          acc += 1;
        }
      }
      return acc;
    }, 0);
    setScore(calculatedScore);
  };

  const handleSelectAnswer = (index) => {
    setSelectAnswer((prev) => {
      const updated = [...prev];
      updated[currIndexQuestion] = index;
      return updated;
    });
  };
  const nextQuestionHandler = () => {
    setCurrIndexQuestion((prev) => prev + 1);
  };
  const prevQuestionHandler = () => {
    setCurrIndexQuestion((prev) => prev - 1);
  };
  const onSelectQuestion = (index) => {
    setCurrIndexQuestion(index);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!currQuestion) {
    return <h1>No Questions Available</h1>;
  }

  return (
    <div className="container-quiz">
      <div className="question-answer">
        <Question title={`Question`} question={currQuestion.question} />
        <Answer
          answers={prepareAnswers()}
          selectAnswer={selectAnswer[currIndexQuestion]}
          onAnswer={handleSelectAnswer}
        />
        <div className="cta">
          {!selectAnswer.some((el) => el === null) ? (
            <button onClick={calculateScore}>Selesaikan Quiz</button>
          ) : (
            <>
              <PrevButton prevHandler={prevQuestionHandler} />
              <NextButton nextHandler={nextQuestionHandler} />
            </>
          )}
        </div>
      </div>
      {datas.length > 0 && (
        <QuestionList
          totalQuiz={datas}
          onSelectQuestion={onSelectQuestion}
          selectAnswer={selectAnswer}
          selectQuestion={currIndexQuestion}
        />
      )}
    </div>
  );
};

export default QuestionAnswer;
