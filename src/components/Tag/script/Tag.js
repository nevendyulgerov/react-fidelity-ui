import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';
import { isFunc } from '../../../utils/ammo';

const Tag = ({ name, title, removeTitle, onRemove }) => (
  <div
    data-component="tag"
    title={title}
  >
    <div className="component-body">
      <span className="tag-name">
        {name}
      </span>
      {isFunc(onRemove) && (
        <button
          className="trigger remove-tag"
          title={removeTitle}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            onRemove(name);
          }}
        >
          <Icon name="add" />
        </button>
      )}
    </div>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  removeTitle: PropTypes.string,
  onRemove: PropTypes.func.isRequired
};

Tag.defaultProps = {
  title: '',
  removeTitle: ''
};

export default Tag;
