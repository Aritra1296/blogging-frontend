import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import axios from "../../axios";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <div className="mb-3" key={comment._id}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </>
  );
};

export default Comments;
