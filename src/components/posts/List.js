import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../app/post/actions';
import Post from './Item';

function List() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST,
        });
    }, []);

    return (
      <div className="posts-container">
        <h1 className="posts-header">Posts list</h1>
        <button type="button" className="btn btn-primary">Add new post</button>
        {
              posts.map((post, index) => (
                <Post key={index} post={post} />
              ))
            }
      </div>
    );
}

export default List;
