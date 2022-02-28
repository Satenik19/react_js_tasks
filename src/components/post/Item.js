import React from 'react';
import PropTypes from 'prop-types';

function Item({ post }) {
    return (
        // eslint-disable-next-line react/style-prop-object
      <div className="card post-item">
        <h5 className="card-header">
          {post.title}
        </h5>
        <div className="card-body d-flex justify-content-between">
          <p className="card-text">{post.description}</p>
          <div>
            <button type="button" className="btn btn-primary mr-2">
              Edit
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

Item.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default Item;
