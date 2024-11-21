import { Posts } from "@/types/Posts";
import style from "./posts.module.scss";
import { commonMetadata } from "@/common/shared-metadata";
import { Pagination } from "@/common/components/Pagination";
import { SearchParams } from "@/types/NextTypes";
import Link from "next/link";
import { fetchClient } from "@/common/clientApi/fetchClient";
import { POSTS_TOTAL } from "@/common/config";

export const metadata = {
  title: `Posts ${commonMetadata.title}`,
  description: "Posts list",
};

type PostsPageProps = {} & SearchParams;

const POSTS_PER_PAGE = 10;

export default async function PostsPage({ searchParams }: PostsPageProps) {
  let page = 1;
  if (searchParams?.page) {
    page = Number(searchParams?.page) || 1;
  }
  const queryParams = new URLSearchParams({
    _limit: POSTS_PER_PAGE.toString(),
    _page: page.toString(),
    _order: "desc",
    _sort: "id",
  });

  const posts = await fetchClient<Posts>(
    `/posts?${queryParams}`,
    { revalidate: 5 }
  );

  return (
    <div>
      <div className={style.headline}>
        <h1>Posts</h1>
        <a href="/posts/new" className="button">
          New post
        </a>
      </div>
      {posts.map((post) => (
        <div className={style.item} key={post.id}>
          #{post.id} {post.title}
          <br />
          <Link href={`/posts/${post.id}`}>read more</Link>
        </div>
      ))}

      <Pagination page={page} total={POSTS_TOTAL} perPage={POSTS_PER_PAGE} />
    </div>
  );
}
