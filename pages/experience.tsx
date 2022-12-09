import Head from "next/head";
import React from "react";
import Layout from "../src/components/layout";

function Experience() {
  return (
    <Layout>
      <Head>
        <title>experience</title>
      </Head>
      <div className="mx-auto max-w-5xl w-full">
        <h1 className="text-2xl mb-10">Experience</h1>
        <div>
          <div className="flex flex-row justify-center items-center">
            <div className="h-0.5 flex-1 bg-slate-500"/>
            <p className="mx-5">January 2022 - November 2022</p>
            <div className="h-0.5 flex-1 bg-slate-500"/>
          </div>
          <div className="flex flex-row justify-between mb-5">
            <h1 className="text-2xl">Ruangguru</h1>
            <h2 className="text-2xl">Frontend Engineer</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center">
            <div className="h-0.5 flex-1 bg-slate-500"/>
            <p className="mx-5">September 2021 - December 2021</p>
            <div className="h-0.5 flex-1 bg-slate-500"/>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl">Siklus</h1>
            <h2 className="text-2xl">Frontend Engineer Intern</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
