import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Backdrop from './Backdrop';
import Body from './Body';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { isNonEmptyStr } from '../../utils';

const { useRef, useEffect } = React;

export type ModalProps = {
  children: React.ReactNode,
  className?: string | null,
  active?: boolean | false,
  disableScroll?: boolean | true,
  [key: string]: any
};

const Modal = (props: ModalProps) => {
  const { children, className, active, disableScroll, ...restProps } = props;
  const refComponent = useRef(null);
  const componentClassName: string = classNames({
    modal: true,
    'modal--active': active,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  useEffect(() => {
    if (disableScroll && active) {
      const modalScroll = refComponent.current;
      // @ts-ignore
      disableBodyScroll(modalScroll);
    }

    if (disableScroll && !active) {
      clearAllBodyScrollLocks();
    }

    return () => {
      if (disableScroll) {
        clearAllBodyScrollLocks();
      }
    };
  }, [disableScroll, active]);

  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-hidden={!active}
      {...restProps}
      ref={refComponent}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

Modal.Backdrop = Backdrop;
Modal.Body = Body;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.Header = Header;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  disableScroll: PropTypes.bool
};

Modal.defaultProps = {
  className: null,
  active: false,
  disableScroll: true
};

export default Modal;
