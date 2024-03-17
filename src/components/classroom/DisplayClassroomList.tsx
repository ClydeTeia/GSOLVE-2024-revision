import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const classListData = [
  { name: "Ian", id: "1" },
  { name: "Ian Clyde", id: "3" },
];

function DisplayClassroomList({}: Props) {
  return (
    <div className="flex flex-col w-11/12 gap-0.5">
      {classListData.map((classList) => (
        <div key={classList.id}>
          <Link href={`/classroom/${classList.id}`}>
            <Button className="w-full">{classList.name}</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DisplayClassroomList;
