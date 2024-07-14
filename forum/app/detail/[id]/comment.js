"use client";

import { useEffect, useState } from "react";

export default function Comment({ postId }) {
    //============================= Comment
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);

    // 랜더링 후 한 번만 실행
    useEffect(() => {
        fetchComments();
    }, [])

    /**
     * postId 기준으로 댓글 목록 가져오기
     */
    async function fetchComments() {
        fetch(`/api/comments/${postId}`)
            .then((response) => response.json())
            .then(setComments);
    }

    /**
     * @param {Event} event
     */
    function setCommentBy({ target: { value } }) {
        setComment(value);
    }

    /**
     * 코멘트 등록 후 댓글 목록 페치
     */
    function postComment() {
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ comment, postId }),
        });
        fetchComments();
    }

    return (
        <div>
            <div>댓글 목록 보여줄 부분</div>
            {comments.map(({ comment }) => (
                <div>{comment}</div>
            ))}
            <input onChange={setCommentBy} />
            <button onClick={postComment}>전송</button>
        </div>
    );
}
