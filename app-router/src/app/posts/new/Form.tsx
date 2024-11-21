"use client";

import { FC, useCallback, useState } from "react";
import { PostData, savePost } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { FormState, Post } from "@/types/Posts";
import { ErrorForm } from "@/common/components/form/ErrorForm";

export const FormPost: FC<{ post?: Post }> = ({ post }) => {
  const [state, formAction] = useFormState<FormState, FormData>(savePost, {
    errors: {},
  });
  return (
    <form action={formAction}>
      <FormContent post={post} state={state} />
    </form>
  );
};

const FormContent: FC<{ state: FormState; post?: Post }> = ({
  state,
  post,
}) => {
  const { pending } = useFormStatus();

  const [values, setValues] = useState<PostData>({
    title: post?.title || "",
    body: post?.body || "",
    tags: post?.tags.join(",") || "",
  });

  const setValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => {
        return { ...prev, ...{ [e.target.name]: e.target.value } };
      });
    },
    [setValues]
  );

  return (
    <>
      <div className="form-line">
        <label>Title:</label>
        <input
          onChange={setValue}
          value={values.title}
          name="title"
          type="text"
        />
        <ErrorForm errors={state.errors.title} />
      </div>
      <div className="form-line">
        <label>Body:</label>
        <textarea onChange={setValue} value={values.body} name="body" />
        <ErrorForm errors={state.errors.body} />
      </div>
      <div className="form-line">
        <label>Tags</label>
        <small>Separate by , (comma)</small>
        <input onChange={setValue} value={values.tags} name="tags" />
        <ErrorForm errors={state.errors.tags} />
      </div>
      <input type="hidden" name="id" value={post?.id} />

      <button disabled={pending} className="button">
        {pending ? "Saving..." : "Save"}
      </button>
    </>
  );
};
