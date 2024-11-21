import { NextPage } from "next";
import { FormPost } from "./Form";
import { SearchParams } from "@/types/NextTypes";
import { fetchClient } from "@/common/clientApi/fetchClient";
import { Post } from "@/types/Posts";

export const metadata = {
  title: "SavePost",
};

const SavePostPage: NextPage<SearchParams> = async ({ searchParams }) => {
  let post: Post | undefined;
  if (searchParams?.id) {
    post = await fetchClient<Post>(
      `/posts/${searchParams.id}`
    );
  }
  return (
    <div>
      <h1>Save post</h1>
      <FormPost post={post} />
    </div>
  );
};

export default SavePostPage;
