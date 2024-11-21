import { Post } from "@/types/Posts";
import { NextPage } from "next";
import style from "./post.module.scss";
import { notFound } from "next/navigation";
import { fetchClient, generatePostTag } from "@/common/clientApi/fetchClient";
import { LikePost } from "../LikePost";

type PostPageProps = {
  params: {
    postId: string;
  };
};

const fetchPost = async (postId: number) => {
  return await fetchClient<Post>(`/posts/${postId}`, {
    tags: [generatePostTag(postId)],
  });
};

export const generateMetadata = async ({ params }: PostPageProps) => {
  const post = await fetchPost(+params.postId);
  return {
    title: post.title,
    description: `read about ${post.title}`,
  };
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const post = await fetchPost(+params.postId);

  return (
    <div>
      <div className={style.headline}>
        <h1>{post.title}</h1>
        <a className="button" href={`/posts/new?id=${post.id}`}>
          Edit
        </a>
      </div>
      <p>{post.body}</p>
      {post.tags && post.tags.length > 0 && (
        <div className={style.tags}>
          {post.tags.map((tag) => (
            <em key={tag}>{tag}</em>
          ))}
        </div>
      )}

      <div className={style.likes}>Likes: {post.reactions}</div>

      <LikePost postId={post.id} />
    </div>
  );
};

export default PostPage;
