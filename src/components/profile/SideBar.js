import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const { pathname } = useLocation();

  const currentRoute = pathname.split('/')[1];

  const generalClass = 'side-bar-item';
  const activeClass = `active ${generalClass}`;

    return (
      <div>
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to="/profile"> APP
              </Link>
            </li>
            <li>
              <Link
                to="/change-password"
                className={
                  currentRoute === 'change-password' ? activeClass : generalClass
                }
              > Change password
              </Link>
            </li>
            <li>
              <Link to="/edit-profile"> Edit profile
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className={
                  currentRoute === 'posts' ? activeClass : generalClass
                }
              > My posts
              </Link>
            </li>
            <li>
              <Link
                to="/cover"
                className={
                    currentRoute === 'cover' ? activeClass : generalClass
                  }
              > Add cover photo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default SideBar;
