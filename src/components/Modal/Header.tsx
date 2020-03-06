import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalHeaderProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const ModalHeader = (props: ModalHeaderProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName: string = classNames({
    modal__header: true,
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

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalHeader.defaultProps = {
  className: null
};

export default ModalHeader;
