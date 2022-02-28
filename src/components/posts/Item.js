import React from 'react';
import PropTypes from 'prop-types';

function Item({ post }) {
    return (
        // eslint-disable-next-line react/style-prop-object
      <div className="card post-item">
        <h5 className="card-header">
          {post.title}
        </h5>
        <div className="card-body">
          <p className="card-text">{post.description}</p>
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
