import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import SyntaxtHighlighter from "react-syntax-highlighter";
import Layout from "../../src/components/layout";

// TODO: need refactor this and try to custom style on tailwindcss typography

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

const components = { SyntaxtHighlighter };

function Post({ frontMatter: { title, date }, mdxSource }: PostProps) {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div className="prose">
        <MDXRemote {...mdxSource} components={components} />
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