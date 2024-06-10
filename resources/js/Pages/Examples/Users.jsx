import Layout from '@/Components/Shared/Layout';

const Users = ({ Users }) => {

    return (
        <>
            <h1 className="text-3xl">Users</h1>

            <ul>
                {Users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>

        </>
    );
};

Users.layout = (page) => <Layout>{page}</Layout>;

export default Users;
