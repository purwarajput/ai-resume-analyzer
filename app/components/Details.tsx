import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const ScoreBadge = ({ score }: { score: number }) => {
  return (
      <div
          className={cn(
              "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
              score > 69
                  ? "bg-badge-green"
                  : score > 39
                      ? "bg-badge-yellow"
                      : "bg-badge-red"
          )}
      >
        <img
            src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"}
            alt="score"
            className="size-4"
        />
        <p
            className={cn(
                "text-sm font-medium",
                score > 69
                    ? "text-badge-green-text"
                    : score > 39
                        ? "text-badge-yellow-text"
                        : "text-badge-red-text"
            )}
        >
          {score}/100
        </p>
      </div>
  );
};

const CategoryHeader = ({
                          title,
                          categoryScore,
                        }: {
  title: string;
  categoryScore: number;
}) => {
  return (
      <div className="flex flex-row gap-4 items-center py-2">
        <p className="text-2xl font-semibold">{title}</p>
        <ScoreBadge score={categoryScore} />
      </div>
  );
};

const CategoryContent = ({
                           tips,
                         }: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid grid-cols-2 gap-4">
          {tips.map((tip, index) => (
              <div className="flex flex-row gap-2 items-center" key={index}>
                <img
                    src={
                      tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
                    }
                    alt="score"
                    className="size-5"
                />
                <p className="text-xl text-gray-500 ">{tip.tip}</p>
              </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full">
          {tips.map((tip, index) => (
              <div
                  key={index + tip.tip}
                  className={cn(
                      "flex flex-col gap-2 rounded-2xl p-4",
                      tip.type === "good"
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : "bg-yellow-50 border border-yellow-200 text-yellow-700"
                  )}
              >
                <div className="flex flex-row gap-2 items-center">
                  <img
                      src={
                        tip.type === "good"
                            ? "/icons/check.svg"
                            : "/icons/warning.svg"
                      }
                      alt="score"
                      className="size-5"
                  />
                  <p className="text-xl font-semibold">{tip.tip}</p>
                </div>
                <p>{tip.explanation}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

// const Details = ({ feedback }: { feedback: Feedback }) => {
//   return (
//       <div className="flex flex-col gap-4 w-full">
//         <Accordion>
//           <AccordionItem id="tone-style">
//             <AccordionHeader itemId="tone-style">
//               <CategoryHeader
//                   title="Tone & Style"
//                   categoryScore={feedback.toneAndStyle.score}
//               />
//             </AccordionHeader>
//             <AccordionContent itemId="tone-style">
//               <CategoryContent tips={feedback.toneAndStyle.tips} />
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem id="content">
//             <AccordionHeader itemId="content">
//               <CategoryHeader
//                   title="Content"
//                   categoryScore={feedback.content.score}
//               />
//             </AccordionHeader>
//             <AccordionContent itemId="content">
//               <CategoryContent tips={feedback.content.tips} />
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem id="structure">
//             <AccordionHeader itemId="structure">
//               <CategoryHeader
//                   title="Structure"
//                   categoryScore={feedback.structure.score}
//               />
//             </AccordionHeader>
//             <AccordionContent itemId="structure">
//               <CategoryContent tips={feedback.structure.tips} />
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem id="skills">
//             <AccordionHeader itemId="skills">
//               <CategoryHeader
//                   title="Skills"
//                   categoryScore={feedback.skills.score}
//               />
//             </AccordionHeader>
//             <AccordionContent itemId="skills">
//               <CategoryContent tips={feedback.skills.tips} />
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//   );
// };

// const Details = ({ feedback }: { feedback?: Feedback }) => {
//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <Accordion>
//         <AccordionItem id="tone-style">
//           <AccordionHeader itemId="tone-style">
//             <CategoryHeader
//               title="Tone & Style"
//               categoryScore={feedback?.toneAndStyle?.score ?? 0}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="tone-style">
//             <CategoryContent tips={feedback?.toneAndStyle?.tips ?? []} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="content">
//           <AccordionHeader itemId="content">
//             <CategoryHeader
//               title="Content"
//               categoryScore={feedback?.content?.score ?? 0}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="content">
//             <CategoryContent tips={feedback?.content?.tips ?? []} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="structure">
//           <AccordionHeader itemId="structure">
//             <CategoryHeader
//               title="Structure"
//               categoryScore={feedback?.structure?.score ?? 0}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="structure">
//             <CategoryContent tips={feedback?.structure?.tips ?? []} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="skills">
//           <AccordionHeader itemId="skills">
//             <CategoryHeader
//               title="Skills"
//               categoryScore={feedback?.skills?.score ?? 0}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="skills">
//             <CategoryContent tips={feedback?.skills?.tips ?? []} />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

// const Details = ({ feedback }: { feedback?: Feedback }) => {
//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <Accordion>
//         <AccordionItem id="tone-style">
//           <AccordionHeader itemId="tone-style">
//             <CategoryHeader
//               title="Tone & Style"
//               categoryScore={feedback?.toneAndStyle?.score ?? 70}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="tone-style">
//             <CategoryContent tips={feedback?.toneAndStyle?.tips ?? [
//               { type: "good", tip: "Your tone is consistent and professional.", explanation: "Maintaining a consistent tone builds credibility." },
//               { type: "improve", tip: "Add more variation to sentence length.", explanation: "Varied sentence length keeps the reader engaged." }
//             ]} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="content">
//           <AccordionHeader itemId="content">
//             <CategoryHeader
//               title="Content"
//               categoryScore={feedback?.content?.score ?? 65}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="content">
//             <CategoryContent tips={feedback?.content?.tips ?? [
//               { type: "good", tip: "Relevant examples are included.", explanation: "Examples make your content more relatable and persuasive." },
//               { type: "improve", tip: "Include more industry-specific keywords.", explanation: "ATS systems look for keywords that match the job description." }
//             ]} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="structure">
//           <AccordionHeader itemId="structure">
//             <CategoryHeader
//               title="Structure"
//               categoryScore={feedback?.structure?.score ?? 80}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="structure">
//             <CategoryContent tips={feedback?.structure?.tips ?? [
//               { type: "good", tip: "Sections are well-organized.", explanation: "Clear sectioning improves readability." },
//               { type: "improve", tip: "Use more bullet points for achievements.", explanation: "Bullet points make accomplishments stand out." }
//             ]} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem id="skills">
//           <AccordionHeader itemId="skills">
//             <CategoryHeader
//               title="Skills"
//               categoryScore={feedback?.skills?.score ?? 70}
//             />
//           </AccordionHeader>
//           <AccordionContent itemId="skills">
//             <CategoryContent tips={feedback?.skills?.tips ?? [
//               { type: "good", tip: "Strong mix of technical and soft skills.", explanation: "A balanced skill set is attractive to employers." },
//               { type: "improve", tip: "Highlight more job-specific skills.", explanation: "Including skills from the job posting boosts ATS compatibility." }
//             ]} />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };


const Details = ({ feedback }: { feedback?: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback?.toneAndStyle?.score ?? 72} // realistic example
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback?.toneAndStyle?.tips ?? [
              { type: "good", tip: "Consistent and professional tone", explanation: "Maintaining a steady tone throughout builds credibility and trust with the reader." },
              { type: "improve", tip: "Limited sentence variation", explanation: "Adding more variety in sentence length can improve engagement." }
            ]} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback?.content?.score ?? 65} // realistic example
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback?.content?.tips ?? [
              { type: "good", tip: "Relevant technical skills", explanation: "Includes key technologies like JavaScript, React.js, and Next.js that align with the role." },
              { type: "improve", tip: "Missing marketing technology experience", explanation: "Consider adding tools like Google Analytics, Tag Manager, and landing page builders." },
              { type: "improve", tip: "Lack of SEO demonstration", explanation: "No mention of SEO best practices or related projects." },
              { type: "improve", tip: "No conversion optimization experience", explanation: "Highlight any A/B testing or CRO work you have done." }
            ]} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback?.structure?.score ?? 78} // realistic example
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback?.structure?.tips ?? [
              { type: "good", tip: "Sections are well-organized", explanation: "Clear sectioning improves readability and makes it easier for recruiters to scan." },
              { type: "improve", tip: "Some paragraphs are too long", explanation: "Breaking text into shorter paragraphs improves clarity and visual appeal." }
            ]} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback?.skills?.score ?? 70} // realistic example
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback?.skills?.tips ?? [
              { type: "good", tip: "Strong mix of technical and soft skills", explanation: "A balanced skill set is attractive to employers." },
              { type: "improve", tip: "Highlight more job-specific skills", explanation: "Including skills from the job posting boosts ATS compatibility." }
            ]} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};


export default Details;
