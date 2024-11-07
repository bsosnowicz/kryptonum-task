import { useState } from 'react';

interface QuestionProps {
  question: {
    title: string;
    body: string;
  };
  index: number;
}

const Question: React.FC<QuestionProps> = ({ question, index }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <details
      onClick={() => handleToggle(index)}
      className={`item ${openIndex === index ? 'active' : ''}`}
    >
      <summary className="list-container">
        <h2 className="title">{question.title}</h2>
        {openIndex === index && <p className="text">{question.body}</p>}
        <button>
          <svg
            className={`icon ${openIndex === index ? 'rotate' : ''}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <use
              href={
                openIndex === index
                  ? '../../public/minuscircle.svg#icon'
                  : '../../public/addcircle.svg#icon'
              }
            ></use>
          </svg>
        </button>
      </summary>
    </details>
  );
};

export default Question;
