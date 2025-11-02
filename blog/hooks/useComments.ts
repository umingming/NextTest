import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment, CreateCommentDto } from "@/types/comment";
import { postKeys } from "./usePosts";

/**
 * 댓글 쿼리 키 팩토리
 */
export const commentKeys = {
    all: ["comments"] as const,
    byPost: (postId: string) => [...commentKeys.all, "byPost", postId] as const,
};

/**
 * 특정 포스트의 댓글 목록을 가져오는 훅
 */
export function useComments(postId: string) {
    return useQuery({
        queryKey: commentKeys.byPost(postId),
        queryFn: async () => {
            const response = await fetch(`/api/posts/${postId}/comments`);
            if (!response.ok) {
                throw new Error("Failed to fetch comments");
            }
            const result = await response.json();
            return result.data as Comment[];
        },
        enabled: !!postId,
    });
}

/**
 * 댓글을 작성하는 훅
 */
export function useCreateComment(postId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateCommentDto) => {
            const response = await fetch(`/api/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to create comment");
            }

            const result = await response.json();
            return result.data as Comment;
        },
        onSuccess: () => {
            // 댓글 목록과 포스트 정보 무효화
            queryClient.invalidateQueries({
                queryKey: commentKeys.byPost(postId),
            });
            queryClient.invalidateQueries({ queryKey: postKeys.list() });
            queryClient.invalidateQueries({
                queryKey: postKeys.detail(postId),
            });
        },
    });
}

/**
 * 댓글을 삭제하는 훅
 */
export function useDeleteComment(postId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (commentId: string) => {
            const response = await fetch(`/api/comments/${commentId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete comment");
            }

            return await response.json();
        },
        onSuccess: () => {
            // 댓글 목록과 포스트 정보 무효화
            queryClient.invalidateQueries({
                queryKey: commentKeys.byPost(postId),
            });
            queryClient.invalidateQueries({ queryKey: postKeys.list() });
            queryClient.invalidateQueries({
                queryKey: postKeys.detail(postId),
            });
        },
    });
}
