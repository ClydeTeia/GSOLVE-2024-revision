"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { CreateChallengeButton } from "@/components/classroom/createChallenge";

const challenges = [];

type Props = {
  params: {
    id: string;
  };
};

export default function Home({ params }: Props) {
  console.log(params.id);
  const [isChallenge, setIsChallenge] = useState<boolean>(true);
  const [isMember, setIsMember] = useState<boolean>(false);

  useEffect(() => {}, []);

  function handleClickChallenge() {
    setIsChallenge(true);
    setIsMember(false);
  }

  function handleClickMember() {
    setIsChallenge(false);
    setIsMember(true);
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* Upper */}
      <div className="w-full bg-green-300">
        <div className="flex ">
          <div>Icon</div>
          <div>Name</div>
        </div>
        <div className="flex gap-1">
          <Button className="rounded-full">+</Button>
          <Button className="rounded-full">?</Button>
          <Button className="rounded-full">=</Button>
          <Button className="rounded-full">%</Button>
        </div>
      </div>
      {/* Bottom Half */}
      <div className="my-4 w-full bg-blue-200">
        <div className="flex gap-7">
          <button
            onClick={handleClickChallenge}
            className={`text-black underline-offset-8 ${isChallenge ? "underline hover:underline-offset-8 hover:text-blue-700" : ""}`}
          >
            Challenges
          </button>
          <button
            onClick={handleClickMember}
            className={`text-black underline-offset-8 ${isMember ? "underline hover:underline-offset-8 hover:text-blue-700" : ""}`}
          >
            Members
          </button>
        </div>
        <Separator className="mb-4 my-0.5" />
        <div className="flex">
          <div className="md:w-3/5 w-full bg-slate-300 min-h-80">
            {isChallenge && (
              <>
                {challenges.length > 0 ? (
                  <div>There are challenges</div>
                ) : (
                  <div className="text-center flex flex-col justify-center items-center w-full h-full gap-3">
                    <div>No challenges available</div>
                    <div>Create a challenge</div>
                    <CreateChallengeButton />
                  </div>
                )}
              </>
            )}
            {isMember && <p>Member</p>}
          </div>
          <div className="md:w-2/5 hidden md:block bg-amber-300">yo</div>
        </div>
      </div>
    </main>
  );
}
