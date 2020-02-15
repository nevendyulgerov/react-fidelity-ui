import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr, isObj } from '../utils';

export type EmptyProps = {
  header?: React.ReactNode | null,
  text: React.ReactNode | string,
  footer?: React.ReactNode | null,
  size?: string | null,
  className?: string | null,
  rounded?: boolean,
  hovered?: boolean,
  bordered?: boolean,
  flat?: boolean,
  [key: string]: any
};

const Empty = (props: EmptyProps) => {
  const { text, header, footer, size, className, rounded, hovered, bordered, flat, ...restProps } = props;
  const hasHeader: boolean = isObj(header);
  const hasFooter: boolean = isObj(footer);
  const componentClassName: string = classNames({
    empty: true,
    'empty--rounded': rounded,
    'empty--hovered': hovered,
    'empty--bordered': bordered,
    'empty--flat': flat,
    [`empty--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      <div className="empty__wrap">
        {hasHeader && (
          <div className="empty__header">
            {header}
          </div>
        )}

        <div className="empty__body">
          {text}
        </div>

        {hasFooter && (
          <div className="empty__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Empty.propTypes = {
  header: PropTypes.node,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf([null, 'sm', 'md', 'lg']),
  className: PropTypes.string,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  bordered: PropTypes.bool,
  flat: PropTypes.bool
};

Empty.defaultProps = {
  header: null,
  footer: null,
  size: null,
  className: null,
  rounded: true,
  hovered: false,
  bordered: true,
  flat: true
};

export default Empty;
