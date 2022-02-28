import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_POSTS_REQUEST } from '../../app/post/actions';
import Post from './Item';
import NewPost from './New';

function List() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsData.posts);

    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST,
        });
    }, []);

    return (
      <div className="posts-container container">
        <h1 className="posts-header">Posts list</h1>
        <NewPost />
        {
              posts.map((post, index) => (
                <Post key={index} post={post} />
              ))
        }
      </div>
    );
}

export default List;
