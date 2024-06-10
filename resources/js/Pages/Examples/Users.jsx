import Layout from '@/Components/Shared/Layout';

const Users = () => {

    return (
        <>
            <h1 className="mt-6 text-3xl">Users</h1>
        </>
    );
};

Users.layout = (page) => <Layout>{page}</Layout>;

export default Users;
