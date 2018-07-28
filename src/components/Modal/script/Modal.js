import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentWillMount() {
    this.attachKeydownMonitor();
  }

  componentWillReceiveProps = ({ isActive }) => {
    this.toggleBody(isActive);
  };

  componentWillUnmount() {
    this.detachKeydownMonitor();
  }

  refComponent;

  /**
   * @description Attach keydown monitor
   */
  attachKeydownMonitor() {
    window.addEventListener('keydown', this.handleEscapeKeyPress);
  }

  /**
   * @description Detach keydown monitor
   */
  detachKeydownMonitor() {
    window.addEventListener('keydown', this.handleEscapeKeyPress);
  }

  /**
   * @description Handle escape key press
   */
  handleEscapeKeyPress = event => {
    const { onEscapeKey } = this.props;
    if (event.key === 'Escape') {
      onEscapeKey();
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

  render() {
    const { content, className, isActive } = this.props;

    return (
      <div
        data-component="modal"
        role="dialog"
        className={`${className} ${isActive ? 'active' : ''}`}
      >
        <div className="component-body">
          {content()}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  content: PropTypes.func.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onEscapeKey: PropTypes.func
};

Modal.defaultProps = {
  className: '',
  isActive: false,
  onEscapeKey: () => {}
};

export default Modal;
