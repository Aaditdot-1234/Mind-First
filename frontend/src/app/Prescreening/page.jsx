'use client'
import React, { useState, useEffect } from 'react'
import Description from '../user_ex/Home_page_Components/Description'

const pre_screening_data = {    
  questions: [
    { id: 1, q: 'Feeling nervous, anxious, or on edge?' },
    { id: 2, q: 'Not being able to stop or control worrying?' },
    { id: 3, q: 'Worrying too much about different things?' },
    { id: 4, q: 'Trouble relaxing?' },
    { id: 5, q: 'Being so restless that it is hard to sit still?' },
    { id: 6, q: 'Becoming easily annoyed or irritable?' },
    { id: 7, q: 'Feeling afraid as if something awful might happen?' },
  ],
  options: [
    { text: 'Not at all', score: 0 },
    { text: 'Several days', score: 1 },
    { text: 'More than half the days', score: 2 },
    { text: 'Nearly every day', score: 3 },
  ]
}

const Prescreening = () => {
  const questions = pre_screening_data.questions
  const options = pre_screening_data.options

  const [result, setResult] = useState('')
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null))
  const [loading, setLoading] = useState(false)

  const handleOptionClick = (questionId, selectedoption) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionId - 1] = selectedoption.score
    setSelectedOptions(newSelectedOptions)
  }

  const handleSubmit = async () => {
    if (selectedOptions.some(option => option === null)) {
      alert("Please answer all the questions before submitting.")
      return
    }

    setLoading(true)  // Show loading state

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ responses: selectedOptions })
      })

      const data = await response.json()
      setResult(data.prediction)  
    } catch (error) {
      console.error("Error fetching prediction:", error)
      setResult("Error processing request. Please try again.")
    } finally {
      setLoading(false)
    }

    document.cookie = "prescreeningCompleted=true; path=/"
  }

  return (
    <div className='h-fit w-screen flex flex-col items-center justify-center'>
      <div className='w-screen flex items-center justify-start mt-[45px] pt-[70px] px-[45px]'>
        <div className='w-full flex flex-col items-start justify-center px-[45px] bg-custom-gradient2 p-7 rounded-[50px] border-0'>
          <h1 className='text-[60px] font-[700]'>Pre-screening process</h1>
          <p className='text-[20px] font-[400] pl-2 text-gray-400'>
            Over the last 2 weeks, how often have you been bothered by any of the following problems?
          </p>
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
                      ${selectedOptions[question.id - 1] === option.score ? 'bg-blue-500' : 'bg-custom-gradient2'}`}
                    onClick={() => handleOptionClick(question.id, option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className='h-[50px] w-fit text-[30px] rounded-[25px] flex items-center justify-center bg-button p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] text-white mt-[30px] ml-5'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </button>

          {result && (
            <div className='flex flex-col'>
              <div id='result' className='w-full mt-[100px] text-[30px] font-[500] text-white bg-custom-gradient2 flex items-center justify-start p-[20px] rounded-[25px]'>
                {result}
              </div>
              <a
                className='h-[50px] w-fit text-[30px] rounded-[25px] flex items-center justify-center bg-button p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] text-white mt-[30px]'
                href='/testpage'
              >
                Next Page
              </a>
            </div>
          )}
        </div>
      </div>
      <Description />
    </div>
  )
}

export default Prescreening