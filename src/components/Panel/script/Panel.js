import React from 'react';
import Icon from '../../Icon/';
import { isFunc } from '../../../utils/ammo';

const Panel = ({ theme = 'default', item }) => {

  return (
    <div data-component="panel" data-theme={theme}>
      {theme === 'default' && (
        <div className="component-body">
          <span className="name">{item.name}</span>
          <span className="date">
            {'Created at '}
            <time>{item.date}</time>
          </span>
        </div>
      )}
      {theme === 'card' && (
        <div className="component-body">
          <figure className="avatar" title="Avatar">
            <img
              src={item.thumbnail}
              alt="avatar"
              onLoad={({ target }) => target.closest('.avatar').classList.add('active')}
            />
          </figure>
          <div className="meta">
            <span className="author" title="Name">
              {item.name}
            </span>
            <span className="note">
              {isFunc(item.note) ? item.note() : item.note}
            </span>
            <span className="date" title="Date">
              {' at '}
              <time className="time">
                {item.date}
              </time>
              {'.'}
            </span>
          </div>
        </div>
      )}
      {theme === 'stat' && (
        <div className="component-body">
          <Icon name={item.icon} />
          <span className="count">
            {item.count}
          </span>
        </div>
      )}
    </div>
  );
};

export default Panel;
