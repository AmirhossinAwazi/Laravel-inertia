import Nav from '@/Components/Shared/Nav';
import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react'

export default function Index({ posts, time }) {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <h1 class="mt-6 font-bold text-4xl">Home</h1>
            <Nav/>

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