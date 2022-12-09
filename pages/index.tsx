import Head from "next/head";
import Link from "next/link";
import MenuItem from "../src/components/atoms/MenuItem";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <Head>
        <title>Farras&apos; Web</title>
      </Head>
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold">
          Hi! I&apos;m Mochamad{" "}
          <div className="relative inline-block">
            <div className="absolute top-0 bottom-0 animate-sliding-width backdrop-invert" />
            Farras
          </div>{" "}
          Fauzan
          <span className="animate-waving-hand relative inline-flex">👋🏻</span>
        </h1>
        <p>
          a software engineer who intrested in frontend technology. experienced
          in reactjs, nextjs, javascript, typescript, reasonml
        </p>
        <div className="mt-2">
          <Link href="/blogs" className="mr-2">
            <MenuItem title="blogs" />
          </Link>
          <Link href="/experience">
            <MenuItem title="experience" />
          </Link>
        </div>
        <div className="mt-2">
          <div>
            <a
              href="https://www.linkedin.com/in/mochfarrasfauzan/"
              className="mr-2"
            >
              <MenuItem title="linkedin" />
            </a>
            <a href="mailto:mochfarrasfauzan@gmail.com" className="mr-2">
              <MenuItem title="email" />
            </a>
            <a href="https://www.instagram.com/frrsfuzn/" className="mr-2">
              <MenuItem title="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
