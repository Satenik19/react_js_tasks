import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from './SideBar';
import { UPLOAD_COVER_REQUEST } from '../../app/profile/actions';

function CoverPhoto() {
    const dispatch = useDispatch();

    const [file, setFile] = useState({});

    const uploadSingleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(URL.createObjectURL(e.target.files[0]), 'file');
    };

    const saveCoverPhoto = () => {
        console.log('test');
        dispatch({
            type: UPLOAD_COVER_REQUEST,
            payload: {
                image: file,
            },
        });
    };

    return (
      <div>
        <SideBar />
        <div className="auth-wrapper container pt-5">
          <div className="">
            <form>
              {
                file ? (
                  <div className="form-group preview">
                    <img src={file} alt="" />
                  </div>
                    ) : null
             }
              <div className="form-group">
                <input type="file" className="form-control" onChange={(e) => uploadSingleFile(e)} />
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={saveCoverPhoto}>Upload</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default CoverPhoto;
