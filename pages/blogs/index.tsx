import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import Layout from "../../src/components/layout";
import Blog from "../../src/components/molecules/blog";
import Link from "next/link";

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
}

function Blogs({ posts }: BlogProps) {
  return (
    <Layout>
      <h1>i write here, enjoy!</h1>
      <div className="flex flex-wrap justify-center ">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <Blog
              title={post.frontMatter.title}
              desc={post.frontMatter.description}
              date=""
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename));
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};

export default Blogs;
