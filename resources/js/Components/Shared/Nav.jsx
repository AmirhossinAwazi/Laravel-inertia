import { Link } from "@inertiajs/inertia-react";

export default function Nav(){
    return (
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
    );
}