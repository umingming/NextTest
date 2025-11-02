export interface Post {
    _id?: string;
    title: string;
    content: string;
    authorId: string; // 작성자 ID
    authorName: string; // 작성자 이름 (표시용)
    tags?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CreatePostDto {
    title: string;
    content: string;
    tags?: string[];
}

export interface UpdatePostDto {
    title?: string;
    content?: string;
    tags?: string[];
}
