import React from 'react';
import Icon from '../../Icon/';
import { isFunc } from '../../../utils/ammo';

const Tag = ({ name, onRemove }) => (
  <div data-component="tag" title={`Tag '${name}'`}>
    <span className="tag-name">{name}</span>
    {isFunc(onRemove) && (
      <button
        className="trigger remove-tag"
        title={`Remove tag '${name}'`}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove();
        }}
      >
        <Icon name="add" />
      </button>
    )}
  </div>
);

export default Tag;
