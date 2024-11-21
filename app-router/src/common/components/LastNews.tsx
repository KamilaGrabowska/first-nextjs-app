"use client";

import { Posts } from "@/types/Posts";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import style from "./lastNews.module.scss";
import { POSTS_TOTAL, PUBLIC_API_URL } from "../config";

const POST_LIMIT = 3;

export const LastNews = () => {
  const [posts, setPosts] = useState<Posts | undefined>(undefined);
  const [page, setPage] = useState(1);

  const fetchNews = useCallback(async () => {
    const resp = await axios.get<Posts>(PUBLIC_API_URL + "/posts", {
      params: { _limit: POST_LIMIT, _page: page },
    });
    setPosts(resp.data);
  }, [page]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews, page]);

  const onNextNews = useCallback(() => {
    setPage((prevPage) => {
      if (prevPage + 1 < Math.ceil(POSTS_TOTAL / POST_LIMIT)) {
        return prevPage + 1;
      }
      return 1;
    });
  }, []);

  return (
    posts && (
      <div className={style["last-news"]}>
        {posts.map((post) => (
          <div className={style.item} key={post.id}>
            {post.title}
            <div className={style["item-link"]}>
              <Link href={`/posts/${post.id}`}>Read more</Link>
            </div>
          </div>
        ))}
        <button onClick={onNextNews} className="button">
          Next news
        </button>
      </div>
    )
  );
};
