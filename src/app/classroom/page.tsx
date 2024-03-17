"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function ClassRoomHomePage({}: Props) {
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
  }, [router]);

  return <div></div>;
}

export default ClassRoomHomePage;
