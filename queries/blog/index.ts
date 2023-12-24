import { useQuery } from "@tanstack/react-query";

const fetchBlogPosts = async () => {
    const res = await fetch(`http://localhost:8000/api/blog`, {
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    });

    if (!res.ok) {
        return Promise.reject(await res.json());
    }

    const response = await res.json();
    return response;
};

interface IBlogPostItem {
    id: number;
    title: string;
    slug: string;
    content: string;
    isPublished: number;
    created_at: Date;
    updated_at: Date;
}

export const useBlogPosts = () => {
    return useQuery<IBlogPostItem[]>({
        queryKey: ["blogPosts"],
        queryFn: () => fetchBlogPosts(),
    });
};
