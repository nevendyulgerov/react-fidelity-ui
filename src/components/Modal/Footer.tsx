import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalFooterProps = {
  children: React.ReactNode,
  className?: string | null,
};

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  const componentClassName = classNames({
    modal__footer: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalFooter.defaultProps = {
  className: null
};

export default ModalFooter;
