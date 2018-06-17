import React, { Component } from 'react';
import uid from 'uid';
import $ from 'jquery';
import Icon from '../../Icon/';
import Loader from '../../Loader/';
import Checkbox from '../../Checkbox/';
import { isFunc } from '../../../utils/ammo';

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
      this.setState({ isMenuOpened: false });
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
      onDisplaySelectedItems,
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

export default Dropdown;
