import { useState } from 'react';
import '../styles/styles.scss';
import { questions } from '../data/questions';
import Question from './Question';

const Acordion = () => {
  const [visibleItems, setVisibleItems] = useState(10);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  const progressPercentage = (visibleItems / questions.length) * 100;

  const slicedQuestions = questions.slice(0, visibleItems);

  return (
    <div className="container">
      <ol className="item-list">
        {slicedQuestions.map((question, index) => (
          <Question question={question} index={index} />
        ))}
      </ol>
      {visibleItems < questions.length && (
        <div className="pagination-container">
          <p
            className="pagination-counter"
            style={{ marginLeft: `calc(${progressPercentage}% - 29px)` }}
          >
            {visibleItems}/{questions.length}
            <span />
          </p>
          <div className="progression-bar">
            <p
              className="progression-status"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <button className="pagination-button" onClick={loadMore}>
            Wczytaj więcej
            <svg width="16" height="17" viewBox="0 0 16 17">
              <use href="../../public/arrowdown.svg#icon"></use>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Acordion;
