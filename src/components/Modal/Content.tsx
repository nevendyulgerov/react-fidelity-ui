import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalContentProps = {
  children: React.ReactNode,
  size?: string | 'auto',
  className?: string | null,
  [key: string]: any
};

const sizes = ['auto', 'xs', 'sm', 'md', 'lg', 'xl', 'fullscreen'];

const ModalContent = (props: ModalContentProps) => {
  const { children, size, className, ...restProps } = props;
  const componentClassName = classNames({
    modal__content: true,
    // @ts-ignore
    [`modal__content--size-${size}`]: ModalContent.sizes.includes(size),
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

ModalContent.sizes = sizes;

ModalContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string
};

ModalContent.defaultProps = {
  size: 'auto',
  className: null
};

export default ModalContent;
