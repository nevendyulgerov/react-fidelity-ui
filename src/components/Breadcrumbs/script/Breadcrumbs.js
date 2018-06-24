import React, { Component } from 'react';
import Icon from '../../Icon';
import { isFunc, uid } from '../../../utils/ammo';

class Breadcrumbs extends Component {
  state = {
    isMobileViewOpened: false
  };

  /**
   * @description Toggle mobile view
   */
  toggleMobileView = () => this.setState(({ isMobileViewOpened }) => ({ isMobileViewOpened: !isMobileViewOpened }));

  render() {
    const { items, isLastActive = true, isToggleableOnMobile = true, isStackedOnMobile = true, onChange } = this.props;
    const { isMobileViewOpened } = this.state;

    const toggleableOnMobile = isToggleableOnMobile ? 'mobile-toggle' : '';
    const mobileViewOpened = isMobileViewOpened ? 'mobile-active' : '';
    const stackedOnMobile = isStackedOnMobile ? 'stacked' : '';

    return (
      <div
        className={`component ${toggleableOnMobile} ${mobileViewOpened} ${stackedOnMobile}`}
        data-component="breadcrumbs"
      >
        <button
          className="trigger toggle-breadcrumbs"
          title="Breadcrumbs"
          onClick={this.toggleMobileView}
        >
          <Icon name="next" />
        </button>
        <ol className="component-items">
          {items.map(({ url, name, isSelected = false, target = '_self' }, index) => (
            <li
              key={uid()}
              className={`component-item ${(isSelected && !isLastActive) || (isLastActive && index === items.length - 1) ? 'active' : ''}`}
            >
              <a
                href={url}
                title={name}
                target={target}
                onClick={event => {
                  if (isFunc(onChange)) {
                    const isItemSelected = (isSelected && !isLastActive) || (isLastActive && index === items.length - 1);
                    onChange({ url, name, isSelected: isItemSelected, event });
                  }
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

export default Breadcrumbs;
