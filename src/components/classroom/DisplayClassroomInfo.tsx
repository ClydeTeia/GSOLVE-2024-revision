import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

const classInfoData = [
  { name: "Ian", email: "grapzclyde17@gmail.com", id: 1 },
  {
    id: "2",
    name: "test",
    email: "test@gmail.com",
  },
];

function DisplayClassroomInfo({}: Props) {
  return (
    <div className="flex flex-col gap-3">
      {classInfoData.map((classInfo) => (
        <div key={classInfo.id}>
          <p>Name: {classInfo.name}</p>
          <p>Email: {classInfo.email}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayClassroomInfo;
