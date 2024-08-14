"use client";

import { useEffect, useMemo, useState } from "react";

export default function Like({ postId, user }) {
    //============================= Likes
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        initLikes();
    }, []);

    /**
     * 현재 postId의 전체 좋아요 중 liked true인 데이터 가져오기
     */
    function initLikes() {
        fetch(`/api/like?postId=${postId}`)
            .then((response) => response.json())
            .then((result) => {
                setLikes(result);
            });
    }

    //============================= Liked
    const liked = useMemo(() => {
        const { liked } = likes.find((like) => like.user === user.email) ?? {};
        return liked;
    }, [likes]);

    /**
     * postId와 이메일을 기준으로 liked를 토글할 것
     */
    function toggleLiked() {
        fetch("/api/like", {
            method: "POST",
            body: JSON.stringify({ postId, liked: !liked }),
        }).then(initLikes);
    }
    

    return (
        <div className="like">
            <span className={liked ? "on" : "off"} onClick={toggleLiked}>
                ♥
            </span>
            {likes.filter(({ liked }) => liked).length}
        </div>
    );
}
