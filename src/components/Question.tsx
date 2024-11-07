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
          <div className="icon-circle">
            <div
              className={`icon-${openIndex === index ? 'minus' : 'plus'} icon ${openIndex === index ? 'rotate' : ''}`}
            />
          </div>
        </button>
      </summary>
    </details>
  );
};

export default Question;
