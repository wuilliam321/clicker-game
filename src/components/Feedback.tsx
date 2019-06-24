import React from "react";
import { WinnerScore } from "../shared/constants";

const Feedback: React.FC<{ score: number }> = ({ score }) => {
  let content;
  if (score == WinnerScore) {
    content = <p>You have won!</p>;
  }
  return <div className="Game-feedback">{content}</div>;
};

export default Feedback;
