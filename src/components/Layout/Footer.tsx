import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type FooterProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
}

const Footer = (props: FooterProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName = classNames({
    footer: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <footer
      role="contentinfo"
      {...restProps}
      className={componentClassName}
    >
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Footer.defaultProps = {
  className: null
};

export default Footer;
