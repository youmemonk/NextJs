import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`snippets/${snippet.id}`}
        className="flex items-center justify-between rounded border p-2"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="rounded border p-2">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
