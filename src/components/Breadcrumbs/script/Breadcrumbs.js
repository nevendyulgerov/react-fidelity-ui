import React, { Component } from 'react';
import uid from 'uid';
import Icon from '../../Icon';
import { isFunc } from '../../../utils/ammo';

class Breadcrumbs extends Component {
  state = {
    isMobileViewOpened: false
  };

  render() {
    const { items, onChange } = this.props;
    const { isMobileViewOpened } = this.state;

    return (
      <div
        className={`component ${isMobileViewOpened ? 'mobile-active' : ''}`}
        data-component="breadcrumbs"
      >
        <button
          className="trigger toggle-breadcrumbs"
          title="Breadcrumbs"
          onClick={() => this.setState(({ isMobileViewOpened }) => ({ isMobileViewOpened: !isMobileViewOpened }))}
        >
          <Icon name="next" />
        </button>
        <ol className="component-items">
          {items.map(({ url, name, isSelected, target = '_self' }) => (
            <li
              key={uid()}
              className={`component-item ${isSelected ? 'active' : ''}`}
            >
              {isFunc(onChange) ? (
                <button className="trigger activate-breadcrumb">
                  <span className="text">
                    {name}
                  </span>
                </button>
              ) : (
                <a href={url} title={name} target={target}>
                  <span className="text">
                    {name}
                  </span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Breadcrumbs;
