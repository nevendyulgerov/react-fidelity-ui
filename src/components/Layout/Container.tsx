import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ContainerProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
}

const Container = (props: ContainerProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName = classNames({
    container: true,
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

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  className: null
};

export default Container;
