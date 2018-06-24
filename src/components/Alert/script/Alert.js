import React, { Component } from 'react';
import Icon from '../../Icon';
import { isHovered } from '../../../utils/ammo';

const defaultDelay = 5000;

class Alert extends Component {
  state = {
    isAlertVisible: this.props.isVisible
  };

  componentDidMount() {
    const { isConfirm, delay = defaultDelay } = this.props;
    if (!isConfirm) {
      this.hideAfterDelay(delay);
    }
  }

  componentWillReceiveProps({ isVisible, isConfirm, delay = defaultDelay }) {
    this.setState({ isAlertVisible: isVisible }, () => {
      if (!isConfirm) {
        this.hideAfterDelay(delay);
      }
    });
  }

  refComponent;

  hideAfterDelay = delay => {
    setTimeout(() => {
      const isAlertHovered = isHovered(this.refComponent);
      if (isAlertHovered) {
        return this.hideAfterDelay(delay);
      }
      this.setState({ isAlertVisible: false });
    }, delay);
  };

  render() {
    const {
      type = 'info',
      title = '',
      content = '',
      closeText = 'Close',
      cancelText = 'Cancel',
      confirmText = 'OK',
      icon = '',
      isConfirm = false,
      onCancel = () => {},
      onConfirm = () => {}
    } = this.props;
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
            title={closeText}
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

export default Alert;
