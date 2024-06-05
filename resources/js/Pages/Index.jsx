import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react'

export default function Index({ posts }) {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <h1>My Super Blog</h1>
            <Link href="/create">create</Link>
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