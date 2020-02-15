import * as PropTypes from 'prop-types';

export const typeShape = PropTypes.oneOf([
  'primary',
  'secondary',
  'success',
  'info',
  'danger',
  'warning'
]);

export const sizeShape = PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg', 'xl']);

export const labelShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node)
]);

export const labelAlignmentShape = PropTypes.oneOf([
  null,
  'left',
  'center',
  'sticky',
  'right'
]);
