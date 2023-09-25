"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex flex-col md:flex-row items-center gap-6">
          <textarea
            placeholder="Write a comment..."
            className="w-full border rounded px-4 py-2 text-sm resize-none"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <Link href="/login" className="underline">
          Login to write a comment
        </Link>
      )}

      <div className="mt-12">
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.user.image}
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] rounded-full"
                    alt="post"
                  />
                  <p>
                    {item.user.name} <br /> {item.createdAt.substring(0, 10)}
                  </p>
                </div>

                <p className="mt-8">
                  <span className="font-semibold">Comment: </span>
                  {item.desc}
                </p>
              </>
            ))}
      </div>
    </div>
  );
};

export default Comments;
