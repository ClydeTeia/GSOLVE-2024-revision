"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/firebaseContext";
import { Button } from "../ui/button";

type Props = {};

function NavBar({}: Props) {
  const { user, logOut } = UserAuth();
  const router = useRouter();
  return (
    <div className="flex w-full text-center bg-green-500 h-14 justify-between items-center px-4">
      <div>
        <p className="text-lg">Signify</p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/classroom">Classroom</Link>
            </li>
            <li>
              <Link href="/playground">Playground</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex text gap-2">
        {user ? (
          <ul className="flex">
            <li className="p-2">Hello {user.displayName}</li>
            <Button
              variant={"destructive"}
              onClick={() => {
                logOut();
              }}
            >
              Sign Out
            </Button>
          </ul>
        ) : (
          <ul className="flex">
            <li
              className="p-2 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </li>
            <li
              className="p-2 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Signup
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
