import React from "react";
import WorkR from "./WorkR";
import WorkL from "./WorkL";
import "./Works.css";

export default function Works() {
  let para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias non, in quam adipisci perspiciatis suscipit animi debitis at vitae perferendis vel hic eos libero doloremque quos quisquam? Quos, incidunt.";
  return (
    <div className="cont">
      <div className="listOfWorks">
        <WorkR title="abc" para={para} />
        <WorkL title="abc" para={para} />
        <WorkR title="abc" para={para} />
        <WorkL title="abc" para={para} />
      </div>
    </div>
  );
}
