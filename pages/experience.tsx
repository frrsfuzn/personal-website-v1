import Head from "next/head";
import React from "react";
import Layout from "../src/components/layout";
import ExperienceCard from "../src/components/organism/experienceCard";

function Experience() {
  return (
    <Layout>
      <Head>
        <title>experience</title>
      </Head>
      <div className="mx-auto max-w-5xl w-full">
        <h1 className="text-2xl mb-10">Experience</h1>
        <ExperienceCard
          company="Ruangguru"
          role="Frontend Engineer"
          date="January 2022 - November 2022"
          techStacks={[
            "ReactJS",
            "NextJS",
            "React Native",
            "ReasonML",
            "Typescript",
            "Javascript",
          ]}
        />
        <ExperienceCard
          company="Siklus"
          role="Frontend Engineer Intern"
          date="September 2021 - December 2021"
          techStacks={["ReactJS", "NextJS", "Typescript", "Material UI"]}
        />
      </div>
    </Layout>
  );
}

export default Experience;
