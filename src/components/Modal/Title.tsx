import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ModalTitleProps = {
  children: React.ReactNode,
  className?: string | null
};

const ModalTitle = ({ children, className }: ModalTitleProps) => {
  const componentClassName = classNames({
    modal__title: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <h3 className={componentClassName}>
      {children}
    </h3>
  );
};

ModalTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

ModalTitle.defaultProps = {
  className: null
};

export default ModalTitle;
