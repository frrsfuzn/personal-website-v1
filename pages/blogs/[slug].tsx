import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import SyntaxHighlighter from "react-syntax-highlighter";
import Layout from "../../src/components/layout";
import Link from "next/link";
import Head from "next/head";

// TODO: need refactor this and try to custom style on tailwindcss typography

import Button from "../../src/components/atoms/button";

interface FrontMatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface PostProps {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = { SyntaxHighlighter, Button };

function Post({ frontMatter: { title, tags, date }, mdxSource }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>blog: {title}</title>
      </Head>
      <div className="mx-auto max-w-4xl w-full">
        <div className="mt-1 mb-2">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              className="bg-orange-500 text-sm p-1 rounded-md mr-2"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="prose my-5">
          <MDXRemote {...mdxSource} components={components} />
        </div>
        <p>created: {date}</p>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((file) => ({
    params: {
      slug: file.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface StaticProps {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default Post;
