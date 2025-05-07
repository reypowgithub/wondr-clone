"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-cache",
  });
  return res.json();
}

export default function Dashboard() {
  const user = getUser();

  const { data: session, status } = useSession();
  const router = useRouter();
  const handleLogout = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: "/login" });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Selamat Datang, {session?.user?.name}
        </h1>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition"
          >
            Keluar
          </button>
          <a
            href="/"
            className="w-full text-center py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition"
          >
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
