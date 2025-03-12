  
const questionsData = {
    depression :{    
        questions: [
            { id: 1, q: 'Little interest or pleasure in doing things?' },
            { id: 2, q: 'Feeling down, depressed, or hopeless?' },
            { id: 3, q: 'Trouble falling or staying asleep, or sleeping too much?' },
            { id: 4, q: 'Feeling tired or having little energy?' },
            { id: 5, q: 'Poor appetite or overeating?' },
            { id: 6, q: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?' },
            { id: 7, q: 'Trouble concentrating on things, such as reading the newspaper or watching television?' },
            { id: 8, q: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?' },
            { id: 9, q: 'Thoughts that you would be better off dead or of hurting yourself in some way?' },
        ],
        options : [
            { text: 'Not at all', score: 0 },
            { text: 'Several days', score: 1 },
            { text: 'More than half the days', score: 2 },
            { text: 'Nearly every day', score: 3 },
        ]
    },
    anxiety :{    
        questions: [
            { id: 1, q: 'Feeling nervous, anxious, or on edge?' },
            { id: 2, q: 'Not being able to stop or control worrying?' },
            { id: 3, q: 'Worrying too much about different things?' },
            { id: 4, q: 'Trouble relaxing?' },
            { id: 5, q: 'Being so restless that it is hard to sit still?' },
            { id: 6, q: 'Becoming easily annoyed or irritable?' },
            { id: 7, q: 'Feeling afraid as if something awful might happen?' },
        ],
        options : [
            { text: 'Not at all', score: 0 },
            { text: 'Several days', score: 1 },
            { text: 'More than half the days', score: 2 },
            { text: 'Nearly every day', score: 3 },
        ]
    },
    stress :{    
        questions: [
            { id: 1, q: 'Feeling overwhelmed by the amount of stress in your life?' },
            { id: 2, q: 'Having difficulty relaxing or winding down?' },
            { id: 3, q: 'Having trouble managing daily responsibilities because of stress?' },
            { id: 4, q: 'Feeling restless or like you can’t sit still due to stress?' },
            { id: 5, q: 'Feeling emotionally drained or exhausted from stress?' },
        ],        
        options : [
            { text: 'Not at all', score: 0 },
            { text: 'Several days', score: 1 },
            { text: 'More than half the days', score: 2 },
            { text: 'Nearly every day', score: 3 },
        ]
    },
    bipolar :{    
        questions: [
            { id: 1, q: 'Has there ever been a period where you felt so good or hyper that others thought you were not your normal self, or you were so hyper that you got into trouble?' },
            { id: 2, q: 'Have you ever been so irritable that you started arguments or shouted at people for no reason?' },
            { id: 3, q: 'Did you ever feel much more self-confident than usual?' },
            { id: 4, q: 'Have you ever needed less sleep than usual and still felt full of energy?' },
            { id: 5, q: 'Were you more talkative or spoke faster than usual?' },
            { id: 6, q: 'Did your thoughts race or come much faster than usual?' },
            { id: 7, q: 'Were you so easily distracted that you had trouble concentrating?' },
            { id: 8, q: 'Did you do things that were unusual for you or that others might consider excessive, foolish, or risky?'},
            { id: 9, q: 'Have you spent money in a way that caused problems?'},
            { id: 10, q: 'Did you feel more energetic or active than usual?'},
            { id: 11, q: 'Did you feel more cheerful or “high” than your friends or family members thought was normal for you?'},
            { id: 12, q: 'Did you feel unusually productive, achieving more than you typically would?'},
            { id: 13, q: 'Did you experience unusual shifts in your mood, energy, or activity level?'}
        ],	
        options : [
            { text: 'Yes', score: 1 },
            { text: 'No', score: 0 },
        ]
    },
    adhd :{    
        questions: [
            { id: 1, q: 'Trouble wrapping up final details of a project?' },
            { id: 2, q: 'Difficulty getting things in order for a task?' },
            { id: 3, q: 'Problems remembering appointments or obligations?' },
            { id: 4, q: 'Avoidance or delay in starting tasks that require a lot of thought?' },
            { id: 5, q: 'Fidgeting or squirming when sitting down for a long time?' },
            { id: 6, q: 'Feeling overly active, as if driven by a motor?' }
        ],
        options : [
            { text: 'Never', score: 0 },
            { text: 'Rarely', score: 0 },
            { text: 'Sometimes', score: 0 },
            { text: 'Often', score: 1 },
            { text: 'Very Often', score: 1 }
        ]
    },
    ptsd :{    
        questions: [
            { id: 1, q: 'Have you ever experienced a very stressful event or situation?' },
            { id: 2, q: 'In the past month, have you been feeling upset by something that reminded you of a past stressful event or situation?' },
            { id: 3, q: 'In the past month, have you had trouble falling or staying asleep because of being upset?' },
            { id: 4, q: 'In the past month, have you felt irritable or angry because of being upset?' },
            { id: 5, q: 'In the past month, have you experienced difficulty concentrating because of being upset?' },
        ],
        options : [
            { text: 'yes', score: 1 },
            { text: 'no', score: 0 },
        ]
    },
    ocd :{    
        questions: [
            { id: 1, q: 'Having persistent thoughts that seem uncontrollable?' },
            { id: 2, q: 'Feeling compelled to perform certain actions or rituals to reduce anxiety?' },
            { id: 3, q: 'Having frequent doubts about actions you’ve done, like whether you locked the door?' },
            { id: 4, q: 'Spending excessive time on rituals, such as cleaning or checking things repeatedly?' },
            { id: 5, q: 'Feeling distressed or anxious if you’re unable to complete your rituals?' },
        ],
        options : [
            { text: 'Not at all', score: 0 },
            { text: 'Several days', score: 1 },
            { text: 'More than half the days', score: 2 },
            { text: 'Nearly every day', score: 3 },
        ]
    },
  };
  
export default questionsData;   