import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeMapper" },
    { name: "description", content: "Mapping candidates to the right roles!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Organize your job hunt & supercharge resumes with AI</h1>
        <h2>Review, improve, and submit with confidence — powered by AI</h2>
      </div>
    
    {resumes.length > 0 && (
       <div className="resume-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
    </div>
)}
</section>
</main>;
}
