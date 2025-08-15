// import ScoreGauge from "~/components/ScoreGauge";
// import ScoreBadge from "~/components/ScoreBadge";

// const Category = ({ title, score }: { title: string, score: number }) => {
//     const textColor = score > 70 ? 'text-green-600'
//             : score > 49
//         ? 'text-yellow-600' : 'text-red-600';

//     return (
//         <div className="resume-summary">
//             <div className="category">
//                 <div className="flex flex-row gap-2 items-center justify-center">
//                     <p className="text-2xl">{title}</p>
//                     <ScoreBadge score={score} />
//                 </div>
//                 <p className="text-2xl">
//                     <span className={textColor}>{score}</span>/100
//                 </p>
//             </div>
//         </div>
//     )
// }

// const Summary = ({ feedback }: { feedback: Feedback }) => {
//     return (
//         <div className="bg-white rounded-2xl shadow-md w-full">
//             <div className="flex flex-row items-center p-4 gap-8">
//                 <ScoreGauge score={feedback.overallScore} />

//                 <div className="flex flex-col gap-2">
//                     <h2 className="text-2xl font-bold">Your Resume Score</h2>
//                     <p className="text-sm text-gray-500">
//                         This score is calculated based on the variables listed below.
//                     </p>
//                 </div>
//             </div>

            {/* <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
            <Category title="Content" score={feedback.content.score} />
            <Category title="Structure" score={feedback.structure.score} />
            <Category title="Skills" score={feedback.skills.score} /> */}

            {/* <Category title="Tone & Style" score={feedback.toneAndStyle?.score ?? 0} />
<Category title="Content" score={feedback.content?.score ?? 0} />
<Category title="Structure" score={feedback.structure?.score ?? 0} />
<Category title="Skills" score={feedback.skills?.score ?? 0} /> */}

{/* <Category title="Tone & Style" score={feedback?.toneAndStyle?.score ?? 0} />
<Category title="Content" score={feedback?.content?.score ?? 0} />
<Category title="Structure" score={feedback?.structure?.score ?? 0} />
<Category title="Skills" score={feedback?.skills?.score ?? 0} /> */}

{/* {feedback && feedback.toneAndStyle && feedback.content && feedback.structure && feedback.skills && (
  <>
    <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
    <Category title="Content" score={feedback.content.score} />
    <Category title="Structure" score={feedback.structure.score} />
    <Category title="Skills" score={feedback.skills.score} />
  </> */}

{/* const mockFeedback = {
  toneAndStyle: { score: 85 },
  content: { score: 92 },
  structure: { score: 78 },
  skills: { score: 88 }
};

// Agar backend se data aa raha hota toh yeh hota:
// const feedback = props.feedback;

const feedback = mockFeedback; // Abhi ke liye dummy data use kar rahe hain

<Category title="Tone & Style" score={feedback.toneAndStyle.score} />
<Category title="Content" score={feedback.content.score} />
<Category title="Structure" score={feedback.structure.score} />
<Category title="Skills" score={feedback.skills.score} />

)}


        </div>
    )
}
export default Summary */}



import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
  const textColor =
    score > 70 ? "text-green-600" : score > 49 ? "text-yellow-600" : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = () => {
  // Backend na hone par dummy data
  const feedback = {
    toneAndStyle: { score: 70 },
    content: { score: 65 },
    structure: { score: 80 },
    skills: { score: 70 },
    overallScore: 75
  };

  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Category title="Content" score={feedback.content.score} />
      <Category title="Structure" score={feedback.structure.score} />
      <Category title="Skills" score={feedback.skills.score} />
    </div>
  );
};

export default Summary;

