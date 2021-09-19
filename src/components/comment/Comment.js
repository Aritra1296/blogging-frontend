import React from "react";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <>
      <p className="mb-1">
        <span className="fw-bold">{comment.userName}</span> on{" "}
        {moment(comment.timestamp).format("llll")}
      </p>
      <p>{comment.comment}</p>
    </>
  );
};

export default Comment;
