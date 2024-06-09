import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react';
import Layout from '@/Components/Shared/Layout';

const Index = ({ posts, time }) => {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <h1 className="mt-6 text-3xl">Home</h1>
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
                <Link href="/" className="text-blue-500" preserveScroll>
                    Refresh
                </Link>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout>{page}</Layout>;

export default Index;
