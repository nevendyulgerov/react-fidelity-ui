import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';
import { uid } from '../../../utils/ammo';

class Breadcrumbs extends Component {
  state = {
    isMobileViewOpened: false
  };

  /**
   * @description Toggle mobile view
   */
  toggleMobileView = () => this.setState(({ isMobileViewOpened }) => ({ isMobileViewOpened: !isMobileViewOpened }));

  render() {
    const { items, isLastActive, isToggleableOnMobile, isStackedOnMobile, onChange } = this.props;
    const { isMobileViewOpened } = this.state;

    const toggleableOnMobile = isToggleableOnMobile ? 'mobile-toggle' : '';
    const mobileViewOpened = isMobileViewOpened ? 'mobile-active' : '';
    const stackedOnMobile = isStackedOnMobile ? 'stacked' : '';

    return (
      <div
        data-component="breadcrumbs"
        className={`${toggleableOnMobile} ${mobileViewOpened} ${stackedOnMobile}`}
      >
        <button
          className="trigger toggle-breadcrumbs"
          title="Breadcrumbs"
          onClick={this.toggleMobileView}
        >
          <Icon name="next" />
        </button>
        <ol className="component-items">
          {items.map(({ url = '', name = '', target = '_self', isSelected = false }, index) => (
            <li
              key={uid()}
              className={`component-item ${(isSelected && !isLastActive) || (isLastActive && index === items.length - 1) ? 'active' : ''}`}
            >
              <a
                href={url}
                title={name}
                target={target}
                onClick={event => {
                  const isItemSelected = (isSelected && !isLastActive) || (isLastActive && index === items.length - 1);
                  onChange({ url, name, isSelected: isItemSelected, event });
                }}
              >
                <span className="name">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
    isSelected: PropTypes.bool
  })).isRequired,
  isLastActive: PropTypes.bool,
  isToggleableOnMobile: PropTypes.bool,
  isStackedOnMobile: PropTypes.bool,
  onChange: PropTypes.func
};

Breadcrumbs.defaultProps = {
  isLastActive: true,
  isToggleableOnMobile: true,
  isStackedOnMobile: true,
  onChange: () => {}
};

export default Breadcrumbs;
