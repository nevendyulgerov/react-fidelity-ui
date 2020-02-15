import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownTextProps = {
  children?: React.ReactNode,
  className?: string | null,
  scrollable?: boolean
};

const DropdownText = (props: DropdownTextProps) => {
  const { children, className, scrollable } = props;

  const componentClassName = classNames({
    dropdown__text: true,
    'dropdown__text--scroll': scrollable,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

DropdownText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  scrollable: PropTypes.bool
};

DropdownText.defaultProps = {
  className: null,
  scrollable: false
};

export default DropdownText;
