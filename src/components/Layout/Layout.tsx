import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';
import Container from './Container';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const Layout = (props: LayoutProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName = classNames({
    layout: true,
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

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: null
};

Layout.Container = Container;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;

export default Layout;
