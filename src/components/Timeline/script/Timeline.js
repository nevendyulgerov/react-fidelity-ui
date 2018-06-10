import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import Icon from '../../Icon/';
import Dropdown from '../../Dropdown/';
import { extend, shape, sortBy, select, selectAll } from '../../../utils/ammo';

class Timeline extends Component {
  state = {
    groupedItems: [],
    sortingOptions: [{
      id: 'asc',
      name: 'Ascending order',
      isSelected: false
    }, {
      id: 'desc',
      name: 'Descending order',
      isSelected: true
    }]
  };

  componentWillReceiveProps({ items, targetKey }) {
    const groupedItemsByDate = this.groupItemsByDate(items, targetKey);
    this.setState({ groupedItems: groupedItemsByDate });
  }

  refComponent;

  /**
   * @description Group items by date
   * @param items
   * @param targetKey
   * @returns {*}
   */
  groupItemsByDate = (items, targetKey) => items.reduce((accumulator, item, index) => {
    const nextItem = extend({}, item);
    const nextItemDate = moment(nextItem[targetKey]);
    const alreadyAddedItems = shape(accumulator).reduceTo('items').fetch();
    const isAlreadyAdded = alreadyAddedItems.filter(item => item.id === nextItem.id).length > 0;

    if (isAlreadyAdded) {
      return accumulator;
    }

    const itemsMatchingByDay = items.filter(filterItem => {
      const filterItemDate = moment(filterItem[targetKey]);
      return filterItemDate.isSame(nextItemDate, 'day');
    });

    const groupedItems = {
      id: index,
      date: nextItemDate.toString(),
      items: itemsMatchingByDay
    };

    accumulator.push(groupedItems);
    return accumulator;
  }, []);

  /**
   * @description Toggle timeline item
   * @param target
   */
  toggleTimelineItem = ({ target }) => {
    const expandedFlag = 'expanded';
    const collapsedFlag = 'collapsed';
    const duration = 100;
    const timeline = target.closest('.timeline-item');
    const isExpanded = target.classList.contains(expandedFlag);
    const hasMultipleItems = target.classList.contains('multiple-items');

    if (!hasMultipleItems) {
      return false;
    }

    const $target = $(target);
    const $iconExpand = $target.find('.icon-expand');
    const $iconCollapse = $target.find('.icon-collapse');

    if (!isExpanded) {
      target.classList.add(expandedFlag);
      target.classList.remove(collapsedFlag);
      timeline.classList.add(expandedFlag);
      timeline.classList.remove(collapsedFlag);
      target.setAttribute('title', 'Collapse timeline');
      $iconExpand.animate({ opacity: 0 }, { duration });
      $iconCollapse.animate({ opacity: 1 }, { duration });
    } else {
      target.classList.remove(expandedFlag);
      target.classList.add(collapsedFlag);
      timeline.classList.remove(expandedFlag);
      timeline.classList.add(collapsedFlag);
      target.setAttribute('title', 'Expand timeline');
      $iconExpand.animate({ opacity: 1 }, { duration });
      $iconCollapse.animate({ opacity: 0 }, { duration });
    }
  };

  /**
   * @description Get time spacing
   * @param date
   * @param nextDate
   * @param isDesc
   */
  getTimeSpacing = (date, nextDate, isDesc) => {
    const dateStart = moment(date);
    const dateEnd = moment(nextDate);
    const differenceInDays = isDesc ? dateStart.diff(dateEnd, 'days') : dateEnd.diff(dateStart, 'days');
    return differenceInDays <= 30 ? 'small' : (differenceInDays <= 180 ? 'medium' : 'large');
  };

  /**
   * @description On change sorting
   * @param nextSortingOptionId
   */
  onChangeSorting = nextSortingOptionId => {
    const { groupedItems, sortingOptions } = this.state;
    const selectedSortingOption = shape(sortingOptions).filterByProp('isSelected', true).fetchIndex(0);
    const nextSortingOptions = sortingOptions.map(sortingOption => ({
      ...sortingOption,
      isSelected: sortingOption.id === nextSortingOptionId
    }));

    this.setState({ sortingOptions: nextSortingOptions }, () => {
      if (selectedSortingOption.id === nextSortingOptionId) {
        return false;
      }

      const nextSortedGroupedItems = this.sortTimeline(groupedItems, nextSortingOptionId);
      this.setState({ groupedItems: nextSortedGroupedItems }, this.normalizeUI);
    });
  };

  /**
   * @description Normalize UI
   */
  normalizeUI = () => {
    const duration = 100;
    selectAll('.trigger.toggle-grouped-items', this.refComponent).each(trigger => {
      const $iconExpand = $(select('.icon-expand', trigger).get());
      const $iconCollapse = $(select('.icon-collapse', trigger).get());
      $iconExpand.animate({ opacity: 1 }, { duration });
      $iconCollapse.animate({ opacity: 0 }, { duration });
      trigger.classList.remove('expanded');
    });
  };

  /**
   * @description Sort timeline
   * @param groupedItems
   * @param direction
   */
  sortTimeline = (groupedItems, direction) => sortBy(groupedItems, 'date', 'date', direction).reduce((accumulator, groupedItem) => {
    const nextGroupedItem = extend({}, groupedItem, {
      items: sortBy(groupedItem.items, this.props.targetKey, 'date', direction)
    });
    accumulator.push(nextGroupedItem);
    return accumulator;
  }, []);

  render() {
    const { title = '', targetKey, theme = '', displayItem = () => {} } = this.props;
    const { groupedItems, sortingOptions } = this.state;
    const { length } = groupedItems;
    const selectedSortingOption = shape(sortingOptions).filterByProp('isSelected', true).fetchIndex(0);
    const isDesc = selectedSortingOption.id === 'desc';

    return (
      <div
        className="component"
        data-component="timeline"
        data-theme={theme}
        ref={node => {
          this.refComponent = node;
        }}
      >
        {title !== '' && (
          <div className="component-header">
            <span className="title">{title}</span>
            <Dropdown
              title="Sort"
              text="Sort timeline"
              triggerText="Sort timeline"
              isCloseOnSelect={true}
              items={sortingOptions}
              onChange={this.onChangeSorting}
            />
          </div>
        )}

        <div className="component-body">
          <ul className="timeline-items">

            {groupedItems.map(({ id, items }, index) => (
              <li
                key={id}
                className={`timeline-item collapsed ${index < length - 1 || length === 2
                  ? `time-spacing-${this.getTimeSpacing(
                    items[0][targetKey],
                    groupedItems[index + 1].items[0][targetKey],
                    isDesc
                  )}`
                  : ''}`}
              >

                {items.length > 0 && (
                  <span className="timeline-item-date" title="Timeline date">
                    {moment(items[0][targetKey]).format('MMM. DD, YYYY')}
                  </span>
                )}

                <div className="count-panel">
                  <span className="text">
                      {`${items.length} ${items.length === 1 ? 'item' : 'items'}`}
                  </span>
                </div>

                <button
                  className={`trigger toggle-grouped-items ${items.length > 1 ? 'multiple-items collapsed' : ''}`}
                  title={items.length > 1 ? 'Expand timeline' : ''}
                  onClick={this.toggleTimelineItem}
                >
                  {items.length > 1 ? (
                    <span>
                      <Icon name="add" className="icon-expand"/>
                      <Icon name="remove" className="icon-collapse"/>
                    </span>
                  ) : (
                    <span className="icon dot">•</span>
                  )}
                </button>

                <div className="bottom-separator">
                  {/* bottom separator */}
                </div>

                {index < length - 1 && (
                  <div className="after-bottom-separator">
                    {/* top separator */}
                  </div>
                )}

                {items.length > 0 && (
                  <ul className="grouped-items">

                    {items.map((item, groupedItemIndex) => (
                      <li key={item.id} className="grouped-item">
                        {displayItem(
                          item,
                          isDesc
                            ? index === length - 1 && groupedItemIndex === items.length - 1
                            : index === 0 && groupedItemIndex === 0)
                        }
                      </li>
                    ))}

                  </ul>
                )}
              </li>
            ))}

          </ul>
        </div>
      </div>
    );
  }
}

export default Timeline;
