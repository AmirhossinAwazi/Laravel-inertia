import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react'

export default function Index({ posts, time }) {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <p>{time}</p>
            <h1 class="mt-6 font-bold text-4xl">Home</h1>
            <ul class="list-disc">
                <li>
                    <Link href="/posts/create" as="button" class="text-blue-500 hover:underline">create</Link>
                </li>
                <li>
                    <Link href="/posts" as="button" class="text-blue-500 hover:underline">filan</Link>
                </li>
            </ul>
            
            
            <hr />
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
                    <Link href={`/posts/${post.id}/edit`}>edit</Link>
                </div>
            ))}
        </>
    )
}