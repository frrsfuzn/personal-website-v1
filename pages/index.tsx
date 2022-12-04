import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold">Hi! I&apos;m Farras</h1>
        <p>
          a software engineer who intrested in frontend technology. experienced in reactjs, nextjs, javascript, typescript, reasonml
        </p>
        <div className="mt-2">
          <Link href="/blogs" className="border-b-2 border-red-400 mr-2">blogs</Link>
          <Link href="/experience" className="border-b-2 border-red-400 mr-2">experience</Link>
        </div>
        <div className="mt-2">
          <div>
            <a href="https://www.linkedin.com/in/mochfarrasfauzan/" className="border-b-2 border-red-400 mr-2">linkedin</a>
            <a href="mailto:mochfarrasfauzan@gmail.com" className="border-b-2 border-red-400 mr-2">email</a>
            <a href="https://www.instagram.com/frrsfuzn/" className="border-b-2 border-red-400 mr-2">instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
