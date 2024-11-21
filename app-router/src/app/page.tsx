import { commonMetadata } from "@/common/shared-metadata";

export const metadata = {
  title: `Main page ${commonMetadata.title}`,
  description: "this is main page"
}

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <p>
        Let&apos;s go with Next.js!!!
      </p>
    </div>
  );
}
