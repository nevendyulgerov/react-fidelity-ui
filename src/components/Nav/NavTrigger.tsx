import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

const { Fragment } = React;

export type NavTriggerProps = {
  renderTrigger: (className: string) => React.ReactNode,
  className?: string | null,
  [key: string]: any
}

const NavTrigger = ({ className, renderTrigger }: NavTriggerProps) => {
  const componentClassName = classNames({
    navigation__trigger: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <Fragment>
      {/*
      // @ts-ignore */}
      {renderTrigger(componentClassName)}
    </Fragment>
  );
};

NavTrigger.propTypes = {
  className: PropTypes.string,
  renderTrigger: PropTypes.func.isRequired
};

NavTrigger.defaultProps = {
  className: null
};

export default NavTrigger;
