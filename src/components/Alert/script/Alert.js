import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';
import { isHovered, isObj } from '../../../utils/ammo';

const defaultDelay = 5000;

class Alert extends Component {
  state = {
    isAlertVisible: this.props.isVisible,
    isHideAfterUnderway: false
  };

  componentWillReceiveProps({ isVisible, isConfirm, delay = defaultDelay }) {
    const { isHideAfterUnderway } = this.state;
    this.setState({ isAlertVisible: isVisible }, () => {
      if (isVisible && !isConfirm && !isHideAfterUnderway) {
        this.hideAfterDelay(delay);
      }
    });
  }

  refComponent;

  hideAfterDelay = delay => {
    const { onCancel = () => {} } = this.props;

    this.setState({ isHideAfterUnderway: true });

    setTimeout(() => {
      if (!isObj(this.refComponent)) {
        return false;
      }
      const { isAlertVisible } = this.state;
      if (!isAlertVisible) {
        return false;
      }
      const isAlertHovered = isHovered(this.refComponent);
      if (isAlertHovered) {
        return this.hideAfterDelay(delay);
      }
      this.setState({
        isAlertVisible: false,
        isHideAfterUnderway: false
      }, () => onCancel());
    }, delay);
  };

  render() {
    const { type, title, content, closeTitle, cancelText, confirmText, icon, isConfirm, onCancel, onConfirm } = this.props;
    const { isAlertVisible } = this.state;

    return isAlertVisible && (
      <div
        data-component="alert"
        data-alert-type={type}
        ref={node => {
          this.refComponent = node;
        }}
      >
        <div className="component-header">
          <div className="title-box">
            {icon !== '' && (
              <Icon name={icon} />
            )}
            <span className="title">
              {title}
            </span>
          </div>
          <div className="content">
            {content}
          </div>

          <button
            className="trigger close-alert"
            title={closeTitle}
            onClick={onCancel}
          >
            <Icon name="add" />
          </button>
        </div>
        {isConfirm && (
          <div className="component-body">
            <button
              className="trigger cancel-alert"
              title={cancelText}
              onClick={onCancel}
            >
              {cancelText}
            </button>
            <button
              className="trigger confirm-alert"
              title={confirmText}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        )}
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  closeTitle: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  icon: PropTypes.string,
  isConfirm: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

Alert.defaultProps = {
  type: 'info',
  content: '',
  closeTitle: 'Close',
  cancelText: 'Close',
  confirmText: 'OK',
  icon: '',
  isConfirm: false,
  onCancel: () => {},
  onConfirm: () => {}
};

export default Alert;
