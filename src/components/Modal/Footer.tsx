import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalFooterProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const ModalFooter = (props: ModalFooterProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName = classNames({
    modal__footer: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalFooter.defaultProps = {
  className: null
};

export default ModalFooter;
