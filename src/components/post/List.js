import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_POST_REQUEST, GET_POSTS_REQUEST } from '../../app/post/actions';
import Post from './Item';
import NewPost from './New';
import usePrevious from '../../services/usePrevious';
import { showToast } from '../../services/toast';
import SideBar from '../profile/SideBar';

function List() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsData.posts);
    const [selectedPost, setSelectedPost] = useState({});

    const { deletePostSuccess, deletePostError } = useSelector((state) => state.postsData);

    const prevDeletePostSuccess = usePrevious(deletePostSuccess);
    const prevDeletePostError = usePrevious(deletePostError);

    const deleteItem = useCallback((id) => {
        dispatch({
            type: DELETE_POST_REQUEST,
            payload: {
                id,
            },
        });
    }, []);

    useEffect(() => {
        if (prevDeletePostSuccess === false && deletePostSuccess) {
            showToast('success', 'Post deleted successfully');
        }
    }, [deletePostSuccess]);

    useEffect(() => {
        if (prevDeletePostError === false && deletePostError) {
            showToast('error', 'Something went wrong');
        }
    }, [deletePostError]);

    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST,
        });
    }, []);

    return (
      <div>
        <SideBar />
        <div className="posts-container container">
          <h1 className="posts-header">Posts list</h1>
          <NewPost selectedPost={selectedPost} />
          {
                    posts.map((post, index) => (
                      <Post
                        key={index}
                        post={post}
                        deleteItem={deleteItem}
                        setSelectedPost={setSelectedPost}
                        index={index}
                      />
                    ))
                }
        </div>
      </div>
    );
}

export default List;
