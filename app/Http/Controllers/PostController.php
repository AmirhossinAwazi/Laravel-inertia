<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'posts' => Post::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        Post::create([
            'title' => $request->title,
            'body' => $request->body
        ]);

        return to_route('index');
    }

    public function show(Post $post)
    {
        return Inertia::render('Show', [
            'post' => $post
        ]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Edit', [
            'post' => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $post->update([
            'title' => $request->title,
            'body' => $request->body
        ]);

        return to_route('index');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return to_route('index');
    }
}
