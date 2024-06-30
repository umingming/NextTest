"use client";

import Link from "next/link";
import ButtonLink from "./buttonLink";

export default function ListItem({ id, title, content }) {
    const url = `/detail/${id}`;

    function deletePost({ target }) {
        const body = JSON.stringify({ id });
        fetch("/api/post", { method: "DELETE", body })
            .then((result) => result.json())
            .then(() => {
                const $item = target.closest(".list-item");
                $item.style.opacity = 0;
                setTimeout(() => {
                    $item.style.display = "none";
                }, 1000);
            });
    }

    return (
        <div className="list-item">
            {/* Link태그엔 Router prefetch 기능 내장 */}
            <Link href={url}>
                <h4>{title}</h4>
            </Link>
            <ButtonLink id={id} type="edit" />
            <button onClick={deletePost}>Delete</button>
            <p>{content}</p>
        </div>
    );
}
