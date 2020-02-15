import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalBodyProps = {
  children: React.ReactNode,
  className?: string | null
};

const ModalBody = ({ children, className }: ModalBodyProps) => {
  const componentClassName = classNames({
    modal__body: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalBody.defaultProps = {
  className: null
};

export default ModalBody;
