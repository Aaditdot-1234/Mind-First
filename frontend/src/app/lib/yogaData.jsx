const videos = {
    depression:[
        { videoId: "a4thkiW2uPA", title: "How to do Viparita Karani" },
        { videoId: "2MJGg-dUKh0", title: "Beginners Yoga: How to do Balasana - Child's Pose" },
        { videoId: "g78vfuC4QBI", title: "How to do Bridge Pose - Setu Bandhasana" },
        { videoId: "PtaeNeNI5gs", title: "Cat Cow Pose | Yoga Practice For Anxiety " },
        { videoId: "V9LYvDQASkE", title: "How to do Savasana" },
        { videoId: "6Ep5VzGqDRU", title: "How to do Adho Mukha Svanasana (Downward Facing Dog)" },
        { videoId: "mytWLo8fHbw", title: "How to do Extended Puppy Pose - Uttana Shishosana" },
        { videoId: "SN1vskJ99T4", title: "How to do Uttanasana" },
        { videoId: "shVXrsqiKWA", title: "How to do Vrikshasana - Tree pose" },
        { videoId: "uJFdJehyr4w", title: "How to do Sukhasana" },
        { videoId: "kL-81iBucXo", title: "How to do Butterfly Pose - Badhakonasana" },
        { videoId: "vhFdcezAyL8", title: "How to do Fish Pose - Matsyasana" },
        { videoId: "g3wvIPXZ-Qo", title: "How to do Sarvangasana - Shoulder Stand" },
    ], 
    anxiety: [
        { videoId: "a4thkiW2uPA", title: "How to do Viparita Karani" },
        { videoId: "PtaeNeNI5gs", title: "Cat Cow Pose | Yoga Practice For Anxiety " },
        { videoId: "2MJGg-dUKh0", title: "Beginners Yoga: How to do Balasana - Child's Pose" },
        { videoId: "BeWH3v6m3ms", title: "How to do Hero Pose - Virasana" },
        { videoId: "vhFdcezAyL8", title: "How to do Fish Pose - Matsyasana" },
        { videoId: "mytWLo8fHbw", title: "How to do Extended Puppy Pose - Uttana Shishosana" },
        { videoId: "dIvn6YyIaWc", title: "How to do Janu Sirsasana (Head to Knee Pose)" },
        { videoId: "dQkBuNWxZK4", title: "How to do Supta Baddha Konasana" },
    ],
    stress: [
        { videoId: "uJFdJehyr4w", title: "How to do Sukhasana" },
        { videoId: "PtaeNeNI5gs", title: "Cat Cow Pose | Yoga Practice For Anxiety and Stress" },
        { videoId: "2MJGg-dUKh0", title: "Beginners Yoga: How to do Balasana - Child's Pose" },
        { videoId: "g78vfuC4QBI", title: "How to do Bridge Pose - Setu Bandhasana" },
        { videoId: "g3wvIPXZ-Qo", title: "How to do Sarvangasana - Shoulder Stand" },
        { videoId: "shVXrsqiKWA", title: "How to do Vrikshasana - Tree pose" },
        { videoId: "S6gB0QHbWFE", title: "How to do Trikonasana - Triangle pose" },
        { videoId: "SN1vskJ99T4", title: "How to do Uttanasana" },
    ],
    bipolar: [
        { videoId: "CTrRX7DcBSA", title: "How To Do Tadasana | Mountain Pose" },
        { videoId: "kkGY3xBnaGc", title: "How to do Virabhadrasana 1 (Warrior 1 Pose)" },
        { videoId: "yxNtoOJ9500", title: "How to do Warrior 2 Pose - Virabhadrasana II" },
        { videoId: "FTWFM-lL5jQ", title: "How to do Eagle Pose | Garudasana" },
        { videoId: "g9zt9Vx6WBo", title: "How to do Dandasana - Staff Pose" },
        { videoId: "V9LYvDQASkE", title: "How to do Savasana" },
    ],
    ptsd: [
        { videoId: "CTrRX7DcBSA", title: "How To Do Tadasana | Mountain Pose" },
        { videoId: "kkGY3xBnaGc", title: "How to do Virabhadrasana 1 (Warrior 1 Pose)" },
        { videoId: "yxNtoOJ9500", title: "How to do Warrior 2 Pose - Virabhadrasana II" },
        { videoId: "FTWFM-lL5jQ", title: "How to do Eagle Pose | Garudasana" },
        { videoId: "g9zt9Vx6WBo", title: "How to do Dandasana - Staff Pose" },
        { videoId: "V9LYvDQASkE", title: "How to do Savasana" },
    ],
    ocd: [
        { videoId: "w_j4lnfRC38", title: "How to do Padmasana (Lotus Pose)" },
        { videoId: "298tj3pcPF8", title: "How to do Paschimottanasana (Seated Forward Bend)" },
        { videoId: "CTrRX7DcBSA", title: "How To Do Tadasana | Mountain Pose" },
        { videoId: "PtaeNeNI5gs", title: "Cat Cow Pose | Yoga Practice For Anxiety " },
        { videoId: "g78vfuC4QBI", title: "How to do Bridge Pose - Setu Bandhasana" },
        { videoId: "vhFdcezAyL8", title: "How to do Fish Pose - Matsyasana" },
        { videoId: "6Ep5VzGqDRU", title: "How to do Adho Mukha Svanasana (Downward Facing Dog)" },
        { videoId: "g3wvIPXZ-Qo", title: "How to do Sarvangasana - Shoulder Stand" },
        { videoId: "V9LYvDQASkE", title: "How to do Savasana" },
    ],
    adhd: [
        { videoId: "CTrRX7DcBSA", title: "How To Do Tadasana | Mountain Pose" },
        { videoId: "shVXrsqiKWA", title: "How to do Vrikshasana - Tree pose" },
        { videoId: "6Ep5VzGqDRU", title: "How to do Adho Mukha Svanasana (Downward Facing Dog)" },
        { videoId: "2MJGg-dUKh0", title: "Beginners Yoga: How to do Balasana - Child's Pose" },
        { videoId: "kL-81iBucXo", title: "How to do Butterfly Pose - Badhakonasana" },
        { videoId: "298tj3pcPF8", title: "How to do Paschimottanasana (Seated Forward Bend)" },
        { videoId: "V9LYvDQASkE", title: "How to do Savasana" },
        { videoId: "6j3vnZEF_Oc", title: "How to do Gomukhasana - Cow Face Pose" },
        { videoId: "FTWFM-lL5jQ", title: "How to do Eagle Pose | Garudasana" },
        { videoId: "yxNtoOJ9500", title: "How to do Warrior 2 Pose - Virabhadrasana II" },
    ]
}; 

export default videos