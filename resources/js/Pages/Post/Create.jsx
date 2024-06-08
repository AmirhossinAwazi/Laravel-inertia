import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import Nav from '@/Components/Shared/Nav';
import Layout from '@/Components/Shared/Layout';


export default function Create() {
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
        <Layout>
            <h1>Create Post</h1>
            <Nav/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" value={values.title} onChange={handleChange} />

                <label htmlFor="body">Body:</label>
                <textarea id="body" value={values.body} onChange={handleChange}></textarea>
                <button type="submit">Create</button>
            </form>
            </Layout>
        </>
    )
}