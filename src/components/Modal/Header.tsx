import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalHeaderProps = {
  children: React.ReactNode,
  className?: string | null
};

const ModalHeader = ({ children, className }: ModalHeaderProps) => {
  const componentClassName = classNames({
    modal__header: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalHeader.defaultProps = {
  className: null
};

export default ModalHeader;
