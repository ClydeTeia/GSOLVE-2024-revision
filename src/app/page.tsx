/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          throw new Error("Token not found");
        }
      } catch (error) {
        console.error("Error checking token:", error);
        router.push("/login");
      }
    };

    checkToken();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
