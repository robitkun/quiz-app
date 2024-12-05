import QuestionTitle from './QuestionTitle';
import QuestionBody from './QuestionBody';

const Question = ({ question, title }) => {
  return (
    <div className="question">
      <QuestionTitle title={title} />
      <QuestionBody question={question} />
    </div>
  );
};

export default Question;
