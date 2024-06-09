import Layout from "@/Components/Shared/Layout";

export default function Show({ post }) {
    return (
        <>
            <Layout>
                <h1>{post.title}</h1>
                <hr />
                <p>{post.body}</p>
            </Layout>
        </>
    )
}