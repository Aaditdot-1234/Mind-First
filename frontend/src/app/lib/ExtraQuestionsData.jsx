const ExtraquestionsData = {
    adhd:{
        extraQuestions : [
            { id: 1, q: 'Making careless mistakes in boring or difficult projects.' },
            { id: 2, q: 'Difficulty maintaining attention in boring or repetitive tasks.' },
            { id: 3, q: 'Difficulty concentrating when directly spoken to.' },
            { id: 4, q: 'Misplacing items at home or work.' },
            { id: 5, q: 'Being distracted by external noise or activity.' },
            { id: 6, q: 'Leaving one’s seat in situations where expected to remain seated.' },
            { id: 7, q: 'Feeling restless or fidgety.' },
            { id: 8, q: 'Difficulty relaxing during free time.' },
            { id: 9, q: 'Talking too much in social situations.' },
            { id: 10, q: "Finishing other people's sentences." },
            { id: 11, q: 'Difficulty waiting one’s turn.' },
            { id: 12, q: 'Interrupting others when they are busy.' },
        ],
        Options : [
            { text: 'Never', score: 0 },
            { text: 'Rarely', score: 0 },
            { text: 'Sometimes', score: 0 },
            { text: 'Often', score: 1 },
            { text: 'Very Often', score: 1 }
        ]
    },
    // bipolar : {
    //     extraQuestions : [
    //         { id: 1, q: 'If yes to any of the above, did these symptoms occur during the same period of time?' },
    //         { id: 2, q: 'How much did these symptoms impact your ability to function (e.g., work, school, social life)?' }
    //     ],
    //     Options : [
    //         { text: 'Never', score: 0 },
    //         { text: 'Rarely', score: 0 },
    //         { text: 'Sometimes', score: 0 },
    //         { text: 'Often', score: 1 },
    //         { text: 'Very Often', score: 1 }
    //     ]
    // }
}
 
export default ExtraquestionsData;