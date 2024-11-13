import { useState, type CSSProperties } from 'react';

interface QuestionProps {
  question: {
    title: string;
    body: string;
  };
  index: number;
  visibleItems: number;
  style?: CSSProperties;
}

const Question: React.FC<QuestionProps> = ({
  question,
  index,
  visibleItems,
}) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <details
      style={{ display: index < visibleItems ? 'block' : 'none' }}
      onClick={() => handleToggle(index)}
      className={`item ${openIndex === index ? 'active' : ''}`}
      data-index={index < 9 ? `0${index + 1}` : index + 1}
    >
      <summary className="list-container" tabIndex={-1}>
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
