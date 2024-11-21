"use server";

import {
  fetchClient,
  generatePostTag,
  updateClient,
} from "@/common/clientApi/fetchClient";
import { FormState, Post } from "@/types/Posts";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const Validation = z.object({
  title: z.string().min(3),
  body: z.string().min(3),
  tags: z.string(),
});

export type PostData = z.infer<typeof Validation>;

export const likePost = async (postId: number) => {
  const post = await fetchClient<Post>(`/posts/${postId}`);
  await updateClient("PATCH", `/posts/${postId}`, {
    reactions: post.reactions + 1,
  });
  revalidateTag(generatePostTag(postId));
  // revalidatePath(`/posts/${postId}`);
};

export const savePost = async (state: FormState, formData: FormData) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000);
  // });

  const data: { [key: string]: unknown } = {};
  for (const pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  const parseResult = Validation.safeParse(data);
  if (parseResult.success === false) {
    const newState: FormState = {
      errors: parseResult.error.flatten().fieldErrors,
    };
    return newState;
  }

  const id = Number(formData.get("id"));

  const dataToSend = {
    ...parseResult.data,
    tags: parseResult.data.tags
      ? (parseResult.data.tags as string).split(",")
      : [],
    reactions: id ? undefined : 0,
  };

  await updateClient(
    id ? "PATCH" : "POST",
    `/posts${id ? `/${id}` : ""}`,
    dataToSend
  );
  revalidatePath("/posts");
  if (id) {
    revalidateTag(generatePostTag(id));
  }
  redirect("/posts");
};
