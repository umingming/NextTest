import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, CreatePostDto, UpdatePostDto } from "@/types/post";

const API_BASE = "/api/posts";

/**
 * 쿼리 키 팩토리 패턴
 * 모든 포스트 관련 쿼리 키를 중앙에서 관리
 */
export const postKeys = {
    all: ["posts"] as const,
    list: () => [...postKeys.all, "list"] as const,
    detail: (id: string) => [...postKeys.all, "detail", id] as const,
};

/**
 * 모든 포스트를 가져오는 훅
 */
export function usePosts() {
    return useQuery({
        queryKey: postKeys.list(),
        queryFn: async () => {
            const response = await fetch(API_BASE);
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            const result = await response.json();
            return result.data as Post[];
        },
    });
}

/**
 * 특정 포스트를 가져오는 훅
 */
export function usePost(id: string | null) {
    return useQuery({
        queryKey: id ? postKeys.detail(id) : ["posts", "detail", null],
        queryFn: async () => {
            if (!id) throw new Error("Post ID is required");
            const response = await fetch(`${API_BASE}/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch post");
            }
            const result = await response.json();
            return result.data as Post;
        },
        enabled: !!id,
    });
}

/**
 * 포스트를 생성하는 훅
 */
export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreatePostDto) => {
            const response = await fetch(API_BASE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to create post");
            }

            const result = await response.json();
            return result.data as Post;
        },
        onSuccess: () => {
            // 모든 포스트 관련 쿼리 무효화
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
}

/**
 * 포스트를 업데이트하는 훅
 */
export function useUpdatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            id,
            data,
        }: {
            id: string;
            data: UpdatePostDto;
        }) => {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to update post");
            }

            const result = await response.json();
            return result.data as Post;
        },
        onSuccess: () => {
            // 모든 포스트 관련 쿼리 무효화
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
}

/**
 * 포스트를 삭제하는 훅
 */
export function useDeletePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete post");
            }

            return await response.json();
        },
        onSuccess: () => {
            // 모든 포스트 관련 쿼리 무효화
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
}
