import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { isNonEmptyStr, isFunc } from '../../utils';

const { useRef, useEffect } = React;

export type ModalProps = {
  children: React.ReactNode,
  header?: React.ReactNode | null,
  footer?: React.ReactNode | null,
  size?: string,
  className?: string | null,
  active?: boolean,
  fullscreen?: boolean,
  onEscape?: () => void
};

const Modal = (props: ModalProps) => {
  const { children, header, footer, size, className, active, fullscreen, onEscape } = props;
  const refComponent = useRef(null);
  const hasOnEscape = isFunc(onEscape);
  const componentClassName = classNames({
    modal: true,
    'modal--active': active,
    [`modal--${size}`]: size !== 'normal',
    'modal--fullscreen': active && fullscreen,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  const handleKeyDown = (event: { key: string }) => {
    if (active && event.key === 'Escape' && hasOnEscape) {
      // @ts-ignore
      onEscape();
    }
  };

  const observeKeyDown = () => window.addEventListener('keydown', handleKeyDown);
  const unobserveKeyDown = () => window.removeEventListener('keydown', handleKeyDown);

  const disableScroll = () => {
    // @ts-ignore
    const modalScroll = refComponent.current.querySelector('.modal__body');
    disableBodyScroll(modalScroll);
  };
  const enableScroll = () => {
    clearAllBodyScrollLocks();
  };

  useEffect(() => {
    observeKeyDown();
    return () => unobserveKeyDown();
  });

  useEffect(() => {
    if (active) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [active]);

  return (
    <div
      ref={refComponent}
      className={componentClassName}
    >
      <div className="modal__dialog">
        <div className="modal__content">
          {header}

          {children}

          {footer}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'normal', 'lg', 'xl']),
  className: PropTypes.string,
  active: PropTypes.bool,
  fullscreen: PropTypes.bool,
  onEscape: PropTypes.func,
};

Modal.defaultProps = {
  header: null,
  footer: null,
  size: 'normal',
  className: null,
  active: false,
  fullscreen: false,
  onEscape: null,
};

export default Modal;
