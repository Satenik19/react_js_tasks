import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { GET_POSTS_REQUEST } from '../../app/home/actions';

function Welcome() {
    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch({
        //     type: GET_POSTS_REQUEST,
        // });
    }, []);
    return (
      <div>
        Welcome
      </div>
    );
}

export default Welcome;
