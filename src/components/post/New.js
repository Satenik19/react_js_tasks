import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../../app/post/actions';
import { showToast } from '../../services/toast';

function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addPostSuccess = useSelector((state) => state.postsData.addPostSuccess);
    const addPostError = useSelector((state) => state.postsData.addPostError);

    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(() => {
        if (addPostSuccess) {
            showToast('success', 'Post has been added successfully');
            ref.current.click();
            resetData();
        }
    }, [addPostSuccess]);

    useEffect(() => {
        if (addPostError) {
            showToast('error', 'Something went wrong');
        }
    }, [addPostError]);

    const submitPost = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            payload: {
                title,
                description,
            },
        });
    };

    const resetData = () => {
        setTitle('');
        setDescription('');
    };

    return (
      <div className="ml-2">
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#posts-modal">
          Add new post
        </button>
        <div
          className="modal fade"
          id="posts-modal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={ref}
                  onClick={resetData}
                >Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => submitPost(e)}
                >Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
}

export default New;
