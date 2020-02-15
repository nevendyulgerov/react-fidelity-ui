import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ContainerProps = {
  children: React.ReactNode,
  className?: string | null,
  align?: string | null,
  [key: string]: any
}

const Content = (props: ContainerProps) => {
  const { children, className, align, ...restProps } = props;
  const componentClassName = classNames({
    content: true,
    [`content__${align}`]: isNonEmptyStr(align),
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

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf([
    null,
    'vcenter'
  ]),
};

Content.defaultProps = {
  className: null,
  align: null
};

export default Content;
