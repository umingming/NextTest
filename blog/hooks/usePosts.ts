import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, CreatePostDto, UpdatePostDto } from "@/types/post";

const API_BASE = "/api/posts";

/**
 * 모든 포스트를 가져오는 훅
 */
export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
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
        queryKey: ["posts", id],
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
            queryClient.invalidateQueries({ queryKey: ["posts"] });
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
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            queryClient.invalidateQueries({
                queryKey: ["posts", variables.id],
            });
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
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
}
