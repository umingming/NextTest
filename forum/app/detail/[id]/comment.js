"use client";

import { useState } from "react";

export default function Comment({ postId }) {
    //============================= Comment
    const [comment, setComment] = useState();

    function setCommentBy({ target: { value } }) {
        setComment(value);
    }

    function postComment() {
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ comment, postId }),
        });
    }

    return (
        <div>
            <div>댓글 목록 보여줄 부분</div>
            <input onChange={setCommentBy} />
            <button onClick={postComment}>전송</button>
        </div>
    );
}
