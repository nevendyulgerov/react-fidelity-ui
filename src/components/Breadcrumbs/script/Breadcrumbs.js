import React, { Component } from 'react';
import uid from 'uid';
import Icon from '../../Icon';
import { isFunc } from '../../../utils/ammo';

class Breadcrumbs extends Component {
  state = {
    isMobileViewOpened: false
  };

  /**
   * @description Toggle mobile view
   */
  toggleMobileView = () => this.setState(({ isMobileViewOpened }) => ({ isMobileViewOpened: !isMobileViewOpened }));

  render() {
    const { items, isToggleableOnMobile = true, isStackedOnMobile = true, onChange } = this.props;
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
          {items.map(({ url, name, isSelected, target = '_self' }) => (
            <li
              key={uid()}
              className={`component-item ${isSelected ? 'active' : ''}`}
            >
              <a
                href={url}
                title={name}
                target={target}
                onClick={event => {
                  if (isFunc(onChange)) {
                    onChange({ url, name, isSelected, event });
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
