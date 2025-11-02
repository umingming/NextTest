export interface Comment {
    _id?: string;
    postId: string;
    content: string;
    authorId: string;
    authorName: string;
    createdAt?: Date;
}

export interface CreateCommentDto {
    content: string;
}
