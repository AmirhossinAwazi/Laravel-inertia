import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const Navigation = () => {
  const { url } = usePage().props;

  const getClassNames = (path) => classNames('text-blue-500 hover:underline', {
    'font-bold underline': url === path,
  });

  return (
    <nav className="mt-6">
      <ul className="list-disc">
        <li>
          <Link className={getClassNames('/posts/create')} href="/posts/create">Create</Link>
        </li>
        <li>
          <Link className={getClassNames('/posts')} href="/posts">Posts</Link>
        </li>
        <li>
          <Link className={getClassNames('/logout')} href="/logout" method="post" data={{ foo: 'bar' }}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;