import { notFound } from "next/navigation";
import { API_URL } from "../config";

type FetchClientOptions = {
  revalidate?: number;
  tags?: string[];
};

export async function fetchClient<P = unknown>(
  url: string,
  options: FetchClientOptions = { revalidate: 10 }
) {
  const { revalidate, tags } = options;
  const resp = await fetch(`${API_URL}${url}`, { next: { revalidate, tags } });

  if (!resp.ok && resp.status === 404) {
    throw notFound();
  }
  if (!resp.ok) {
    throw new Error("problem with getting post");
  }

  const post: P = await resp.json();
  return post;
}

export async function updateClient(
  method: "POST" | "PATCH",
  url: string,
  data: unknown
) {
  const resp = await fetch(`${API_URL}${url}`, {
    method,
    body: JSON.stringify(data),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });

  if (!resp.ok) {
    console.error(resp);
    throw new Error(`problem with update data, status code: ${resp.status}`);
  }
}

export function generatePostTag(postId: number) {
  return `post${postId}`;
}