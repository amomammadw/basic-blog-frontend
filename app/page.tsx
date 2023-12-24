"use client";
import { useBlogPosts } from "@/queries/blog";

export default function Home() {
    const { data, isLoading } = useBlogPosts();

    const handleBlogPosts = () => {
        if (isLoading) {
            return (
                <>
                    <div className="h-3 w-full bg-gray-400 animate-pulse rounded-lg"></div>
                </>
            );
        } else if (data) {
            return (
                <>
                    {data.map((item, index) => {
                        return <h1 key={index}>{item.title}</h1>;
                    })}
                </>
            );
        } else {
            return <h1>No Items</h1>;
        }
    };

    return (
        <div>
            <h2 className="font-medium text-2xl mb-4">Blogs Here</h2>
            {handleBlogPosts()}
        </div>
    );
}
