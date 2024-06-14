import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem('activeLink') || usePage().props.url
  );

  const handleClick = (path) => {
    setActiveLink(path);
    localStorage.setItem('activeLink', path);
  };

  const getClassNames = (path) => classNames('textb-lack hover:underline', {
    'font-bold underline': activeLink === path,
  });

  useEffect(() => {
    const handlePopState = () => {
      setActiveLink(localStorage.getItem('activeLink') || window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link
            className={getClassNames('/posts/create')}
            href="/posts/create"
            onClick={() => handleClick('/posts/create')}
          >
            Create
          </Link>
        </li>
        <li>
          <Link className={getClassNames('/posts')} href="/posts" onClick={() => handleClick('/posts')}>
            Posts
          </Link>
        </li>
        <li>
          <Link className={getClassNames('/Users/Index')} href="/Users/Index" onClick={() => handleClick('/Users/Index')}>
            Users
          </Link>
        </li>
        <li>
          <Link
            className={getClassNames('/logout')}
            href="/logout"
            method="post"
            data={{ foo: 'bar' }}
            onClick={() => handleClick('/logout')}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;