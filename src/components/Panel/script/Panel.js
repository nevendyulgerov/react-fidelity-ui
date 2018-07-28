import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';
import { isFunc, isStr } from '../../../utils/ammo';

const Panel = ({ template, item }) => {
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

Panel.propTypes = {
  template: PropTypes.string,
  item: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string
    }),
    PropTypes.shape({
      icon: PropTypes.string,
      count: PropTypes.number
    }),
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      note: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.func
      ]).isRequired,
      date: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      closeTitle: PropTypes.string,
      content: PropTypes.string,
      cancelText: PropTypes.string,
      confirmText: PropTypes.string,
      cancelTitle: PropTypes.string,
      confirmTitle: PropTypes.string,
      onCancel: PropTypes.func.isRequired,
      onConfirm: PropTypes.func.isRequired
    })
  ]).isRequired
};

Panel.defaultProps = {
  template: 'default'
};

export default Panel;
