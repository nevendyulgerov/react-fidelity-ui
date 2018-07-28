import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';
import Loader from '../../Loader/';
import Checkbox from '../../Checkbox/';
import { isFunc, isHovered, uid } from '../../../utils/ammo';

class Dropdown extends Component {
  state = {
    filterText: '',
    isMenuOpened: false
  };

  componentWillMount() {
    this.attachClickMonitor();
  }

  componentWillUnmount() {
    this.detachClickMonitor();
  }

  refComponent;

  /**
   * @description Attach click monitor
   */
  attachClickMonitor() {
    window.addEventListener('click', this.closeViaOutsideClick);
  }

  /**
   * @description Detach click monitor
   */
  detachClickMonitor() {
    window.addEventListener('click', this.closeViaOutsideClick);
  }

  /**
   * @description Close via outside click
   */
  closeViaOutsideClick = () => {
    const { isMenuOpened } = this.state;
    const toggleMenu = this.refComponent.querySelector('.trigger.toggle-menu');
    const menu = this.refComponent.querySelector('.menu');
    const isMenuTriggerHovered = isHovered(toggleMenu);
    const isMenuHovered = isHovered(menu);

    if (!isMenuHovered && !isMenuTriggerHovered && isMenuOpened) {
      this.setState({ isMenuOpened: false });
    }
  };

  /**
   * @description Toggle menu
   */
  toggleMenu() {
    const { onToggleMenu, isFilterable = false } = this.props;
    const { isMenuOpened } = this.state;

    this.setState({ isMenuOpened: !isMenuOpened }, () => {
      const { isMenuOpened } = this.state;

      if (isMenuOpened && isFilterable) {
        const menu = this.refComponent.querySelector('.menu');
        const filterInput = menu.querySelector('.filter').querySelector('input');
        filterInput.focus();
      }

      if (isFunc(onToggleMenu)) {
        onToggleMenu(isMenuOpened);
      }
    });
  }

  /**
   * @description On filter
   * @param filterText
   */
  onFilter = filterText => {
    const { onFilter } = this.props;
    this.setState({ filterText }, () => {
      if (!isFunc(onFilter)) {
        return false;
      }
      onFilter(filterText);
    });
  };

  render() {
    const {
      title,
      subtitle,
      triggerText,
      items,
      filterPlaceholder,
      addItemTitle,
      isCloseOnSelect,
      isDisabled,
      isFilterable,
      isLoading,
      isAddable,
      onDisplaySelectedItems,
      onChange,
      onAddItem
    } = this.props;
    const { filterText, isMenuOpened } = this.state;
    const selectedItems = items.filter(item => item.isSelected);
    const itemsLength = items.length;

    return (
      <div
        data-component="dropdown"
        className={`${isDisabled ? 'disabled' : ''}`}
        title={triggerText}
        ref={node => {
          this.refComponent = node;
        }}
      >
        <div
          role="button"
          className={`trigger toggle-menu ${isMenuOpened ? 'active' : ''}`}
          onClick={() => this.toggleMenu()}
        >
          {isFunc(onDisplaySelectedItems) ? (
            <div className="text">
              {onDisplaySelectedItems(selectedItems)}
            </div>
          ) : (
            <span className="text">
              {itemsLength > 0 && selectedItems.length > 0
                ? selectedItems.map(item => item.name).join(', ')
                : triggerText}
            </span>
          )}

          <div className="icon-box">
            <Loader isLoading={isLoading} />
            <Icon name="select" className={`${!isLoading ? 'active' : ''}`} />
          </div>
        </div>

        <div
          className={`menu ${isMenuOpened && (itemsLength > 0 || isFilterable) ? 'active' : ''} ${isLoading ? 'loading' : ''}`}
        >
          <div className="menu-heading">
            {title && (
              <span className="component-title">
                {title}
              </span>
            )}
            {subtitle !== '' && (
              <span className="component-subtitle">
                {subtitle}
              </span>
            )}
          </div>

          <div className={`menu-body ${itemsLength === 0 && isFilterable ? 'no-results' : ''}`}>
            {isFilterable && (
              <div className="filter">
                <input
                  type="text"
                  value={filterText}
                  className={`${isAddable ? 'addable' : ''}`}
                  placeholder={filterPlaceholder}
                  onKeyPress={({ key }) => {
                    if (key === 'Enter') {
                      onAddItem(filterText);
                    }
                  }}
                  onChange={({ target }) => {
                    const nextFilterText = target.value;
                    this.onFilter(nextFilterText);
                  }}
                />
                <button
                  className={`trigger add-item ${isAddable ? 'active' : ''}`}
                  title={addItemTitle}
                  onClick={() => onAddItem(filterText)}
                >
                  <span className="text">
                    {addItemTitle}
                  </span>
                </button>
              </div>
            )}
            <ul className={`menu-items ${itemsLength === 0 ? 'no-items' : ''}`}>
              {items.map(item => {
                const itemId = item.id || uid();

                return (
                  <li key={itemId} className="menu-item">

                    <Checkbox
                      id={itemId}
                      isChecked={item.isSelected}
                      isDisabled={isLoading}
                      labelText={item.name}
                      labelTitle={`Select ${item.name}`}
                      onChange={({ target }) => {
                        onChange(item, target.checked);

                        if (isCloseOnSelect) {
                          this.setState({ isMenuOpened: false });
                        }
                      }}
                    />

                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  triggerText: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    isSelected: PropTypes.bool
  })).isRequired,
  isFilterable: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  isAddable: PropTypes.bool,
  addItemTitle: PropTypes.string,
  isCloseOnSelect: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onDisplaySelectedItems: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onAddItem: PropTypes.func,
  onFilter: PropTypes.func,
  onToggleMenu: PropTypes.func
};

Dropdown.defaultProps = {
  subtitle: '',
  triggerText: '',
  isFilterable: false,
  filterPlaceholder: '',
  isAddable: false,
  addItemTitle: '',
  isCloseOnSelect: false,
  isDisabled: false,
  isLoading: false,
  onDisplaySelectedItems: undefined,
  onAddItem: () => {},
  onFilter: () => {},
  onToggleMenu: () => {}
};

export default Dropdown;
