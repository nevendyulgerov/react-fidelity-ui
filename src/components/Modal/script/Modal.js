import React, { Component } from 'react';

class Modal extends Component {
  state = {};

  componentWillMount() {
    const { isClosedWithEscapeKey = true } = this.props;
    if (!isClosedWithEscapeKey) {
      return false;
    }
    this.attachKeydownMonitor();
  }

  componentWillReceiveProps = ({ isActive }) => {
    this.toggleBody(isActive);
  };

  componentWillUnmount() {
    const { isClosedWithEscapeKey = true } = this.props;
    if (!isClosedWithEscapeKey) {
      return false;
    }
    this.detachKeydownMonitor();
  }

  refComponent;

  /**
   * @description Attach keydown monitor
   */
  attachKeydownMonitor() {
    window.addEventListener('keydown', this.closeViaKeyDown);
  }

  /**
   * @description Detach keydown monitor
   */
  detachKeydownMonitor() {
    window.addEventListener('keydown', this.closeViaKeyDown);
  }

  /**
   * @description Close via key down
   */
  closeViaKeyDown = event => {
    if (event.key === 'Escape') {
      this.onCancel({ isClosedWithEscapeKey: true });
    }
  };

  /**
   * @description Toggle body
   * @param isOn
   */
  toggleBody = isOn => {
    if (isOn) {
      document.body.classList.add('fidelity-ui-no-scroll');
    } else {
      document.body.classList.remove('fidelity-ui-no-scroll');
    }
  };

  /**
   * @description On cancel
   * @param isClosedWithEscapeKey
   */
  onCancel = ({ isClosedWithEscapeKey = false }) => {
    const { onCancel = () => {} } = this.props;
    onCancel(isClosedWithEscapeKey);
  };

  /**
   * @description On confirm
   */
  onConfirm = () => {
    const { onConfirm = () => {} } = this.props;
    onConfirm();
  };

  render() {
    const { content = () => {}, className = '', isActive = false } = this.props;

    return (
      <div className={`${className} ${isActive ? 'active' : ''}`} data-component="modal" role="dialog">
        <div className="component-body">
          <div className="component-content">
            {content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
