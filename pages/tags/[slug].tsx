import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import Layout from "../../src/components/layout";
import Blog from "../../src/components/molecules/blog";

interface FrontMatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface Post {
  frontMatter: FrontMatter;
  slug: string;
}

interface BlogProps {
  posts: Post[];
  slug: string;
}

function Tags({ posts, slug }: BlogProps) {
  return (
    <Layout>
      <h1 className="text-2xl mb-5">tag: {slug}</h1>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div className="max-w-lg w-full mb-5 mr-5" key={post.slug}>
            <Blog
              title={post.frontMatter?.title}
              desc={post.frontMatter?.description}
              date={post.frontMatter?.date}
              tags={post.frontMatter?.tags}
              slug={post.slug}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

interface StaticProps {
  params: {
    slug: string;
  };
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const tags = new Set(
    files
      .map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("posts", filename));
        const { data: frontMatter } = matter(markdownWithMeta);
        return frontMatter.tags;
      })
      .flat()
  );
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const files = fs.readdirSync("posts");
  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join("posts", filename));
      const { data: frontMatter } = matter(markdownWithMeta);
      return {
        frontMatter,
        slug: filename.split(".")[0],
      };
    })
    .filter((post) => post.frontMatter.tags.includes(slug));
  posts.sort((a, b) => {
    return (
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
    );
  });
  return {
    props: {
      slug,
      posts,
    },
  };
};

export default Tags;
