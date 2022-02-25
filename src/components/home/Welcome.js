import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../app/home/actions';

function Welcome() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST,
        });
    }, []);

    return (
      <div>
        <h1>Posts list</h1>
        {
          posts.map((post, index) => (
            <p key={index}>
              {post?.title}
            </p>
          ))
         }
      </div>
    );
}

export default Welcome;
