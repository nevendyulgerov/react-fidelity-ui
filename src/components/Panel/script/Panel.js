import React from 'react';
import Icon from '../../Icon/';
import { isFunc, isStr } from '../../../utils/ammo';

const Panel = ({ template = 'default', item }) => {
  const getDefaultPanel = ({ name, date }) => (
    <div className="component-body">
      <span className="name">
        {name}
      </span>
      <span className="date">
        {'Created at '}
        <time>{date}</time>
      </span>
    </div>
  );

  const getStatPanel = ({ icon, count }) => (
    <div className="component-body">
      <Icon name={icon} />
      <span className="count">
        {count}
      </span>
    </div>
  );

  const getCardPanel = ({ thumbnail, name, note, date }) => (
    <div className="component-body">
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
          {isFunc(note)
            ? note()
            : (isStr(note) ? note : '')}
        </span>
        <span className="date" title="Date">
          {' at '}
          <time className="time">
            {date}
          </time>
          {'.'}
        </span>
      </div>
    </div>
  );

  const getModalPanel = ({ title, closeTitle = '', content = '', cancelText = 'Cancel', confirmText = 'OK', cancelTitle = '', confirmTitle = '', onCancel, onConfirm }) => (
    <div className="component-body">
      <div className="modal-header">
        <div className="text-box">
          <span className="title">
            {title}
          </span>
        </div>

        <button
          className="trigger close-modal"
          title={closeTitle}
          onClick={() => onCancel()}
        >
          <Icon name="add" />
        </button>
      </div>

      {content !== '' && (
        <div className="modal-body">
          <div className="content">
            {content}
          </div>
        </div>
      )}

      {isFunc(onCancel) && isFunc(onConfirm) && (
        <div className="modal-footer">
          <div className="modal-actions">
            <button
              className="trigger cancel"
              title={cancelTitle}
              onClick={() => onCancel()}
            >
              {cancelText}
            </button>
            <button
              className="trigger confirm"
              title={confirmTitle}
              onClick={() => onConfirm()}
            >
              {confirmText}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div data-component="panel" data-template={template}>
      {template === 'default' && getDefaultPanel(item)}
      {template === 'card' && getCardPanel(item)}
      {template === 'stat' && getStatPanel(item)}
      {template === 'modal' && getModalPanel(item)}
    </div>
  );
};

export default Panel;
