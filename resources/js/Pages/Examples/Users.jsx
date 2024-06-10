import Layout from '@/Components/Shared/Layout';
import { Link, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const Users = ({ Users, pagination }) => {
    const { props } = usePage();
    const { Users: usersData } = props;

    const handlePageChange = (page) => {
        Inertia.get('/Users', { page });
    };

    return (
        <>
            <h1 className="text-3xl">Users</h1>

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y- divide-gray-200">
                                <tbody className="bg-white divide-y- divide-gray-200">
                                    {usersData.data.map(user => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {user.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={`/users/${user.id}/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => handlePageChange(pagination.current_page - 1)}
                    disabled={pagination.current_page === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                >
                    Previous
                </button>

                <span className="px-4 py-2">
                    page {pagination.current_page} of {pagination.last_page}
                </span>

                <button
                    onClick={() => handlePageChange(pagination.current_page + 1)}
                    disabled={pagination.current_page === pagination.last_page}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                >
                    Next
                </button>

            </div>

        </>
    );
};

Users.layout = (page) => <Layout>{page}</Layout>;

export default Users;