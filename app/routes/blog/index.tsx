import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = async () => {
  return json(await getPosts());
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
