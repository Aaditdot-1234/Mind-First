'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Description from '@/app/user_ex/Home_page_Components/Description';
import questionsData from '@/app/lib/QuestionsData';
import ExtraquestionsData from '@/app/lib/ExtraQuestionsData';
import ExtraQuestions from '@/app/lib/extraQuestions';
import Recommendation from '@/app/recommendation/page';
import Appointment from '@/app/Appointment/page';

const TestData = () => {
  const { testpageId } = useParams();
  const testData = questionsData[testpageId];
  const questions = testData?.questions || [];
  const options = testData?.options || []; 

  const extraTestData = ExtraquestionsData[testpageId];
  const extraQuestions = extraTestData?.extraQuestions || [];
  const extraOptions = extraTestData?.Options || [];

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [extraSelectedOptions, setExtraSelectedOptions] = useState(Array(extraQuestions.length).fill(null));
  const [result, setResult] = useState('');
  const [timing, setTiming] = useState();
  const [impact, setImpact] = useState();
  const [appointment, setAppointment] = useState();

  const handleOptionClick = (questionId, selectedoption) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionId - 1] = {
      text: selectedoption.text,
      score: selectedoption.score,
    };
    setSelectedOptions(newSelectedOptions);
  };

  const handleExtraOptionClick = (questionId, selectedOption) => {
    const newExtraSelectedOptions = [...extraSelectedOptions];
    newExtraSelectedOptions[questionId - 1] = {
      text: selectedOption.text,
      score: selectedOption.score,
    };
    setExtraSelectedOptions(newExtraSelectedOptions);
    if (questionId === 1) setTiming(selectedOption.score);
    else setImpact(selectedOption.score);

  };

  const handleSubmit = () => {
    if (selectedOptions.some(option => option === null)) {
      alert("Please answer all the questions before submitting.");
      return;
    }
  
    if (testpageId === 'bipolar' || testpageId === 'adhd') {
      if (extraSelectedOptions.some(option => option === null)) {
        alert("Please answer all additional questions before submitting.");
        return;
      }
    }
  
    const total = selectedOptions.reduce((acc, curr) => acc + (curr?.score || 0), 0);
  
    if (testpageId === 'depression') {
      if (total <= 4) setResult(`Minimal ${testpageId}`);
      else if (total <= 9) setResult(`Mild ${testpageId}`);
      else if (total <= 14) setResult(`Moderate ${testpageId}`);
      else if (total <= 19) {
        setResult(`Severe ${testpageId}`) 
        setAppointment(true)
      }
      else {
        setResult(`Very Severe ${testpageId}`)
        setAppointment(true)
      }
    }
    
    else if (testpageId === 'anxiety') {
      if (total <= 4) setResult(`Minimal ${testpageId}`);
      else if (total <= 9) setResult(`Mild ${testpageId}`);
      else if (total <= 14) setResult(`Moderate ${testpageId}`);
      else if (total <= 19) {
        setResult(`Severe ${testpageId}`) 
        setAppointment(true)
      }
      else {
        setResult(`Very Severe ${testpageId}`)
        setAppointment(true)
      }
    }
    
    else if (testpageId === 'stress') {
      if (total <= 3) setResult(`Minimal ${testpageId}`);
      else if (total <= 7) setResult(`Mild ${testpageId}`);
      else if (total <= 11) setResult(`Moderate ${testpageId}`);
      else {
        setResult(`Severe ${testpageId}`)
        setAppointment(true)
      }
    } 
    
    else if (testpageId === 'bipolar') {
      if (total >= 7 && timing === 1 && impact >= 1) {
        setResult("Your responses indicate symptoms consistent with bipolar disorder. Further evaluation by a mental health professional is recommended.");
        setAppointment(true)
      } else {
        setResult("Your responses do not indicate significant symptoms of bipolar disorder based on the MDQ.");
      }
    } 
    
    else if (testpageId === 'ptsd') {
      if (total >= 3) setResult(`High risk for ${testpageId}. Please seek further evaluation.`), setAppointment(true);
      else setResult(`Low risk for ${testpageId}. Further evaluation may still be recommended if concerns persist.`);
    } 
    
    else if (testpageId === 'adhd') {
      if (total >= 4) setResult(`Consider seeking professional evaluation.`), setAppointment(true);
      else setResult(`No immediate concern based on self-report.`);
    }
  };
  

  return (
    <div className='h-fit w-screen flex flex-col items-center justify-center'>
      <div className='w-screen flex items-center justify-start mt-[45px] pt-[70px] px-[45px]'>
        <div className='w-full flex flex-col items-start justify-center px-[45px] bg-custom-gradient2 p-7 rounded-[50px] border-0'>
          <h1 className='text-[60px] font-[700]'>Testing for {testpageId}</h1>
          <p className='text-[20px] font-[400] pl-2 text-gray-400'>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
          <p className='text-[20px] font-[400] pl-2 mt-3 text-gray-400'>Please note, all fields are required.</p>
        </div>
      </div>
      <div className='h-fit w-full m-[45px] flex items-center justify-center'>
        <div className='w-full m-[45px] p-[75px] bg-gray-200 rounded-[50px] border-0 flex flex-col items-start justify-center'>
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
                      ${selectedOptions[question.id - 1]?.text === option.text ? 'bg-blue-500' : 'bg-custom-gradient2'}`}
                    onClick={() => handleOptionClick(question.id, option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {testpageId === 'bipolar' &&
            <>
              <ExtraQuestions
                header={'Additional Questions for Functional Impairment:'}
                questions={[{ id: 1, q: 'If yes to any of the above, did these symptoms occur during the same period of time?' }]}
                options={[
                  { text: 'Yes', score: 1 },
                  { text: 'No', score: 0 }
                ]}
                extraSelectedOptions={extraSelectedOptions}
                handleExtraOptionClick={handleExtraOptionClick}
              />
              <ExtraQuestions
                questions={[{ id: 2, q: 'How much did these symptoms impact your ability to function (e.g., work, school, social life)?' }]}
                options={[
                  { text: 'Never', score: 0 },
                  { text: 'Rarely', score: 0 },
                  { text: 'Sometimes', score: 0 },
                  { text: 'Often', score: 1 },
                  { text: 'Very Often', score: 1 }
                ]}
                extraSelectedOptions={extraSelectedOptions}
                handleExtraOptionClick={handleExtraOptionClick}
              />
            </>
          }

          {testpageId === 'adhd'? 
            <ExtraQuestions
              header={'Part B:'}
              questions={extraQuestions}
              options={extraOptions}
              extraSelectedOptions={extraSelectedOptions}
              handleExtraOptionClick={handleExtraOptionClick}
            /> : 
            null
          }

          <button
            className='h-[50px] w-fit text-[30px] rounded-[25px] flex items-center justify-center bg-button p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] text-white mt-[30px] ml-5'
            onClick={handleSubmit}
          >
            Submit
          </button>
          {result && (
            <div id='result' className='w-full mt-[100px] text-[30px] font-[500] text-white bg-custom-gradient2 flex items-center justify-start p-[20px] rounded-[25px]'>
              {result}
            </div>
          )}
        </div>
      </div>
      {result !== ''? (
        <div>
          <Recommendation testPage={testpageId}/>
          <br /><br /><br /><br /><br /><br />
        </div>
      ): (
        <div></div>
      )}
      {appointment && 
        <div className='relative h-screen w-full'>
          <Appointment
            initial={{ opacity: 0, x: +100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 50 }}
            viewport={{ once: true, amount: 0.5 }}           
            display={'absolute h-full w-full left-[70px]'} 
            className={'h-[90%] w-[90%]'}
          />
        </div>
      }
      <Description />
    </div>
  );
};

export default TestData;