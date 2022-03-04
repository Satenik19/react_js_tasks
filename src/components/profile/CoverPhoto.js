import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './SideBar';
import { UPLOAD_COVER_REQUEST } from '../../app/profile/actions';
import { showToast } from '../../services/toast';

function CoverPhoto() {
    const dispatch = useDispatch();

    const [picture, setPicture] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const inputEl = useRef(null);
    const { uploadCoverSuccess, uploadCoverError } = useSelector((state) => state.profile);

    const uploadSingleFile = async (e) => {
        e.preventDefault();
        await setPicture(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const saveCoverPhoto = (e) => {
        e.preventDefault();
        dispatch({
            type: UPLOAD_COVER_REQUEST,
            payload: {
                file: picture,
            },
        });
    };

    useEffect(() => {
        if (uploadCoverSuccess) {
            setImagePreview(null);
            inputEl.current.value = '';
            showToast('success', 'Cover image uploaded successfully');
        }
    }, [uploadCoverSuccess]);

    useEffect(() => {
        if (uploadCoverError) {
            showToast('error', 'Something went wrong');
        }
    }, [uploadCoverError]);

    return (
      <div>
        <SideBar />
        <div className="auth-wrapper container pt-5">
          <div className="">
            <form encType="multipart/form-data">
              {
                  imagePreview ? (
                    <div className="form-group preview">
                      <img src={imagePreview} alt="" />
                    </div>
                    ) : null
             }
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => uploadSingleFile(e)}
                  ref={inputEl}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(e) => saveCoverPhoto(e)}
              >Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default CoverPhoto;
