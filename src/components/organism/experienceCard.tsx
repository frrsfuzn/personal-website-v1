import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  techStacks: string[];
}

function ExperienceCard({
  company,
  role,
  date,
  techStacks,
}: ExperienceCardProps) {
  return (
    <div className="mb-14">
      <div className="flex flex-row justify-center items-center">
        <div className="h-0.5 flex-1 bg-slate-500" />
        <p className="mx-5">{date}</p>
        <div className="h-0.5 flex-1 bg-slate-500" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-5">
        <h1 className="text-2xl">{company}</h1>
        <h2 className="text-2xl">{role}</h2>
      </div>
      <div>
        Tech Stack:
        {techStacks.map((techStack, i) => (
          <label key={techStack}>
            {techStack}{i != techStacks.length - 1 ? ", " : ""}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
