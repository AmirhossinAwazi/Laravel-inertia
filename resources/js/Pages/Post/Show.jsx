import Nav from "@/Components/Shared/Nav";

export default function Show({ post }) {
    return (
        <>
            <h1>{post.title}</h1>
            <Nav/>
            <hr/>
            <p>{post.body}</p>
        </>
    )
}