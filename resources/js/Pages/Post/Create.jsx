import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import Layout from '@/Components/Shared/Layout';


const Create = () => {
    const [values, setValues] = useState({ 
        title: "",
        body: ""
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/posts', values)
    }

    return (
        <>
            <h1 class="mt-6 text-3xl">Create Post</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" value={values.title} onChange={handleChange} />

                <label htmlFor="body">Body:</label>
                <textarea id="body" value={values.body} onChange={handleChange}></textarea>
                <button type="submit">Create</button>
            </form>
        </>
    );
};

Create.layout = (page) => <Layout>{page}</Layout>;

export default Create;