import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react'

export default function Index({ posts, time }) {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <h1 class="mt-6 font-bold text-4xl">Home</h1>
            <ul class="list-disc">
                <li>
                    <Link href="/posts/create" as="button" class="text-blue-500 hover:underline">Create</Link>
                </li>
                <li>
                    <Link href="/posts" as="button" class="text-blue-500 hover:underline">Posts</Link>
                </li>
                <li>
                    <Link href="/logout" method="post" data={{ foo: 'bar' }} as="button" class="text-blue-500 hover:underline">Logout</Link>
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

            <div className="mt-64">
                <p>{time}</p>
                <Link href="/" class="text-blue-500" preserve-Scroll>
                    Refresh
                </Link>
            </div>
        </>
    )
}