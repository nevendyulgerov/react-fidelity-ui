import React, { Component } from 'react';
import uid from 'uid';
import Icon from '../../Icon/';
import Checkbox from '../../Checkbox/';
import PropTypes from 'prop-types';
import { isFunc } from '../../../utils/ammo';
import $ from 'jquery';

class Dropdown extends Component {
  state = {
    menuTriggerId: '',
    menuId: '',
    filterText: '',
    isMenuOpened: false
  };

  componentWillMount() {
    this.setState({
      menuTriggerId: uid(),
      menuId: uid()
    });
    this.attachClickMonitor();
  }

  componentWillReceiveProps({ filterText }) {
    this.setState({ filterText });
  }

  componentWillUnmount() {
    this.detachClickMonitor();
  }

  /**
   * @description Attach click monitor
   */
  attachClickMonitor() {
    window.addEventListener('click', this.closeViaOutsideClick, false);
  }

  /**
   * @description Detach click monitor
   */
  detachClickMonitor() {
    window.addEventListener('click', this.closeViaOutsideClick, false);
  }

  /**
   * @description Close via outside click
   */
  closeViaOutsideClick = () => {
    const { menuTriggerId, menuId, isMenuOpened } = this.state;
    const isMenuTriggerHovered = $(`#${menuTriggerId}`).is(':hover');
    const isMenuHovered = $(`#${menuId}`).is(':hover');

    if (!isMenuHovered && !isMenuTriggerHovered && isMenuOpened) {
      this.setState({ isMenuOpened: false })
    }
  };

  /**
   * @description Toggle menu
   */
  toggleMenu() {
    const { onToggleMenu, isFilterable = false } = this.props;
    const { isMenuOpened, menuId } = this.state;

    this.setState({ isMenuOpened: !isMenuOpened }, () => {
      const { isMenuOpened } = this.state;

      if (isMenuOpened && isFilterable) {
        const $filterInput = $(`#${menuId}`).find('.filter').find('input');
        $filterInput.focus();
      }

      if (isFunc(onToggleMenu)) {
        onToggleMenu(isMenuOpened);
      }
    });
  }

  onFilter = filterText => {
    const { onFilter } = this.props;
    this.setState({ filterText }, () => onFilter(filterText));
  };

  render() {
    const {
      triggerText = '',
      title,
      text,
      items,
      filterPlaceholder = '',
      addItemTitle = '',
      isCloseOnSelect = false,
      isDisabled = false,
      isFilterable = false,
      isLoading = false,
      isAddable = false,
      onUpdateItems,
      onChange = () => {},
      onAddItem = () => {}
    } = this.props;
    const { menuTriggerId, menuId, filterText, isMenuOpened } = this.state;
    const selectedItems = items.filter(item => item.isSelected);
    const itemsLength = items.length;

    return (
      <div className={`${isDisabled ? 'disabled' : ''}`} data-component="dropdown" title={triggerText}>
        <div
          id={menuTriggerId}
          className={`trigger toggle-menu ${isMenuOpened ? 'active' : ''}`}
          onClick={() => this.toggleMenu()}
        >
          {isFunc(onUpdateItems) ? (
            <div className="text">
              {onUpdateItems(selectedItems)}
            </div>
          ) : (
            <span className="text">
              {itemsLength > 0 && selectedItems.length > 0
                ? selectedItems.map(item => item.name).join(', ')
                : triggerText}
            </span>
          )}

          <div className="icon-box">
            <div className={`loader-box ${isLoading ? 'active' : ''}`}>
              <div className="loader">{/* Loader */}</div>
            </div>

            <Icon name={`select`} className={`${!isLoading ? 'active' : ''}`}/>
          </div>
        </div>

        <div
          id={menuId}
          className={`menu ${isMenuOpened && (itemsLength > 0 || isFilterable) ? 'active' : ''} ${isLoading ? 'loading' : ''}`}
        >
          <div className="menu-heading">
            {title && (
              <span className="component-title">
                {title}
              </span>
            )}
            {text && (
              <span className="component-text">
                {text}
              </span>
            )}
          </div>

          <div className={`menu-body ${itemsLength === 0 && isFilterable ? 'no-results' : ''}`}>
            {isFilterable && (
              <div className="filter">
                <input
                  value={filterText}
                  className={`${isAddable ? 'addable' : ''}`}
                  placeholder={filterPlaceholder}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      onAddItem(filterText);
                    }
                  }}
                  onChange={({ target }) => this.onFilter(target.value)}
                />
                <button
                  className={`trigger add-item ${isAddable ? 'active' : ''}`}
                  title={addItemTitle}
                  onClick={() => onAddItem(filterText)}
                >
                  <span className="text">{'Add'}</span>
                </button>
              </div>
            )}
            <ul className={`menu-items ${itemsLength === 0 ? 'no-items' : ''}`}>
              {items.map((item, index) => (
                <li key={item.id || index} className="menu-item">

                  <Checkbox
                    id={item.id}
                    isChecked={item.isSelected}
                    isDisabled={isLoading}
                    labelText={item.name}
                    labelTitle={`Select ${item.name}`}
                    onChange={event => {
                      onChange(item.id, event.target.checked);

                      if (isCloseOnSelect) {
                        this.setState({ isMenuOpened: false });
                      }
                    }}
                  />

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    isSelected: PropTypes.bool.isRequired
  })),
  onChange: PropTypes.func
};

export default Dropdown;
