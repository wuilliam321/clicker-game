import React from "react";
import { WinnerScore } from "../shared/constants";
import "./Feedback.scss";

const Feedback: React.FC<{ score: number }> = ({ score }) => {
  let content;
  if (score === WinnerScore) {
    content = (
      <div className="message">
        <span>You have won!</span>
      </div>
    );
  }
  return <div className="Game-feedback">{content}</div>;
};

export default Feedback;
