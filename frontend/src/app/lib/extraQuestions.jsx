import React from 'react';

const ExtraQuestions = ({ header, questions, options, extraSelectedOptions, handleExtraOptionClick }) => {
  return (
    <div className='border-t-[2px] border-t-gray-500 mt-10'>
      <h3 className='text-[60px] font-[600] text-gray-900 my-10'>{header}</h3>
      {questions.map((question) => (
        <div key={question.id} className='flex flex-col items-start justify-center'>
          <h2 className='text-[20px] font-[600] text-gray-500'>
            {question.id}. {question.q}
          </h2>
          <div className='flex items-center justify-center gap-3 text-white text-[20px] cursor-pointer m-8'>
            {options.map((option) => (
              <button
                key={option.text}
                className={`h-[40px] w-fit rounded-[25px] flex items-center justify-center p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] 
                  ${extraSelectedOptions[question.id - 1]?.text === option.text ? 'bg-blue-500' : 'bg-custom-gradient2'}`}
                onClick={() => handleExtraOptionClick(question.id, option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraQuestions;
