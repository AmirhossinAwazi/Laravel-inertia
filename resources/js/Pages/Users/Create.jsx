import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '@/Components/Shared/Layout';

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Added password confirmation field
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setData(key, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post('/users');
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Create New User</h1>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 uppercase font-bold text-sm text-gray-700">Name:</label>
                    <input id="name" value={data.name} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 uppercase font-bold text-sm text-gray-700">Email:</label>
                    <input id="email" type="email" value={data.email} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 uppercase font-bold text-sm text-gray-700">Password:</label>
                    <input id="password" type="password" value={data.password} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.password && <div className="text-red-600">{errors.password}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="block mb-2 uppercase font-bold text-sm text-gray-700">Confirm Password:</label>
                    <input id="password_confirmation" type="password" value={data.password_confirmation} onChange={handleChange} required className="border border-gray-400 p-2 w-full" />
                    {errors.password_confirmation && <div className="text-red-600">{errors.password_confirmation}</div>}
                </div>

                <div className="mb-6 mt-4">
                    <button type="submit" disabled={processing} className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">Submit</button>
                </div>
            </form>
        </>
    );
}

Create.layout = (page) => <Layout>{page}</Layout>;

export default Create;