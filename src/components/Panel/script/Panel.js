import React from 'react';
import { isFunc } from '../../../utils/ammo';

const Panel = ({ theme = 'default', item }) => {
  const { name, date, thumbnail, note } = item;

  return (
    <div data-component="panel" data-theme={theme}>
      {theme === 'default' && (
        <div className="meta">
          <span className="name">{name}</span>
          <span className="date">
            {'Created at '}
            <time>{date}</time>
          </span>
        </div>
      )}
      {theme === 'card' && (
        <div className="card">
          <figure className="avatar" title="Avatar">
            <img
              src={thumbnail}
              alt="avatar"
              onLoad={({ target }) => target.closest('.avatar').classList.add('active')}
            />
          </figure>
          <div className="meta">
            <span className="author" title="Name">
              {name}
            </span>
            <span className="note">
              {isFunc(note) ? note() : note}
            </span>
            <time className="date" title="Date">
              {' at '}
              <span className="time">
                {item.date}
              </span>
              {'.'}
            </time>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panel;
