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
            style={{ marginLeft: `calc(${progressPercentage}% - 25px)` }}
          >
            {visibleItems} / {questions.length}
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
            <svg
              width="16"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="icon"
            >
              <path
                d="M8 3.15v10.667m0 0 4-4m-4 4-4-4"
                stroke="url(#paint0_linear_7069_284)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7069_284"
                  x1="11.85"
                  y1="3.15"
                  x2="3.509"
                  y2="14.817"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#2DD282" />
                  <stop offset="100%" stop-color="#90F4E8" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Acordion;
