import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalBackdropProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const ModalBackdrop = (props: ModalBackdropProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName = classNames({
    modal__backdrop: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      role="document"
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

ModalBackdrop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalBackdrop.defaultProps = {
  className: null
};

export default ModalBackdrop;
