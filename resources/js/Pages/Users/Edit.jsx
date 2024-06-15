
import Layout from '@/Components/Shared/Layout';
import { useForm } from '@inertiajs/inertia-react';

const Edit = ({ user }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        password_confirmation: '',
    })

    function handleChange(e) {
        setData(e.target.name, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(`/users/${user.id}`);
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Edit User</h1>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <div>
                    <label htmlFor="name" className="block mb-2 uppercase font-bold text-sm text-gray-700">Name:</label>
                    <input id="name" name="name" value={data.name} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 uppercase font-bold text-sm text-gray-700">Email:</label>
                    <input id="email" name="email" type="email" value={data.email} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 uppercase font-bold text-sm text-gray-700">Password:</label>
                    <input id="password" name="password" type="password" value={data.password} onChange={handleChange} className="border border-gray-400 p-2 w-full" />
                    {errors.password && <div className="text-red-600">{errors.password}</div>}
                </div>

                <div>
                    <label htmlFor="password_confirmation" className="block mb-2 uppercase font-bold text-sm text-gray-700">Confirm Password:</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" value={data.password_confirmation} onChange={handleChange} className="border border-gray-400 p-2 w-full" />
                    {errors.password_confirmation && <div className="text-red-600">{errors.password_confirmation}</div>}
                </div>

                <div className="mb-6 mt-4">
                    <button type="submit" disabled={processing} className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">
                        Save
                    </button>
                </div>
            </form>
        </>
    )

}

Edit.layout = (page) => <Layout>{page}</Layout>;

export default Edit;