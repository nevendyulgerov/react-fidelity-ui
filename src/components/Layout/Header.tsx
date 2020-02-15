import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr, observeIntersection } from '../../utils';

const { useState, useEffect, useRef } = React;

export type HeaderProps = {
  children: React.ReactNode,
  className?: string | null,
  sticky?: boolean,
  [key: string]: any
}

const Header = (props: HeaderProps) => {
  const { children, className, sticky, ...restProps } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const beforeHeaderRef = useRef(null);
  const componentClassName = classNames({
    header: true,
    'header--sticky': sticky,
    'header--scrolled': sticky && isScrolled,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  useEffect(() => {
    if (!sticky) {
      return () => {};
    }

    const topLinkNode = beforeHeaderRef.current;

    // @ts-ignore
    const observer = observeIntersection(topLinkNode, (items: []) => {
      // @ts-ignore
      setIsScrolled(!items[0].isIntersecting);
    });

    // @ts-ignore
    return () => observer.unobserve(topLinkNode);
  }, [sticky]);

  return (
    <>
      {sticky && (
        <span
          ref={beforeHeaderRef}
          className="invisible"
        />
      )}

      <header
        {...restProps}
        className={componentClassName}
      >
        {children}
      </header>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  sticky: PropTypes.bool
};

Header.defaultProps = {
  className: null,
  sticky: false
};

export default Header;
