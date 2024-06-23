"use client";

import Link from "next/link";
import ButtonLink from "./buttonLink";

export default function ListItem({ id, title, content }) {
    const url = `/detail/${id}`;
    return (
        <div className="list-item">
            {/* Link태그엔 Router prefetch 기능 내장 */}
            <Link href={url}>
                <h4>{title}</h4>
            </Link>
            <ButtonLink id={id} type="edit" />
            <button
                onClick={() => {
                    fetch("/api/post", { method: "DELETE", body: id })
                        .then((result) => result.json())
                        .then(console.log);
                }}
            >
                Delete
            </button>
            <p>{content}</p>
        </div>
    );
}
