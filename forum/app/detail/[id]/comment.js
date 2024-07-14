"use client";

import { useEffect, useState } from "react";

export default function Comment({ postId }) {
    //============================= Comment
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);

    /*
        1. 빈 문자열이면 랜더링 후 한 번만 실행
        2. 랜더링 이후에 로직 수행
    */
    useEffect(() => {
        fetchComments();
    }, []);

    /**
     * postId 기준으로 댓글 목록 가져오기
     */
    async function fetchComments() {
        fetch(`/api/comment?postId=${postId}`)
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
        }).then(() => {
            setComment("");
            fetchComments();
        });
    }

    return (
        <div>
            <div>================댓글================</div>
            {comments.map(({ _id, comment, author }) => (
                <div key={_id.toString()}>
                    <pre>{author}</pre>
                    <span>{comment}</span>
                </div>
            ))}
            <input value={comment} onChange={setCommentBy} />
            <button onClick={postComment}>전송</button>
        </div>
    );
}
