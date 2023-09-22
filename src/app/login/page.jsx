"use client";
import { useRouter } from "next/navigation";
// Next Auth
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="text-xl">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <section className="h-[80vh] flex items-center justify-center">
      <button
        className="bg-red-500 text-white px-6 py-3 rounded shadow"
        onClick={() => signIn("google")}
      >
        Sign In With Google
      </button>
    </section>
  );
};

export default LoginPage;
