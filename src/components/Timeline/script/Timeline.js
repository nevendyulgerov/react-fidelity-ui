import React, { Component } from 'react';
import Icon from '../../Icon/';
import Dropdown from '../../Dropdown/';
import { groupItemsByDate, getTimeSpacing, sortTimeline } from './Utils';
import { shape, selectAll, isObj, isFunc, uid } from '../../../utils/ammo';

class Timeline extends Component {
  state = {
    groupedItems: sortTimeline(groupItemsByDate(this.props.items, this.props.targetKey), 'desc', this.props.targetKey),
    sortingOptions: [{
      direction: 'asc',
      name: 'Ascending order',
      isSelected: false
    }, {
      direction: 'desc',
      name: 'Descending order',
      isSelected: true
    }]
  };

  componentWillReceiveProps({ items, targetKey }) {
    const groupedItemsByDate = groupItemsByDate(items, targetKey);
    this.setState({ groupedItems: groupedItemsByDate });
  }

  refComponent;

  /**
   * @description Toggle timeline item
   * @param target
   */
  toggleTimelineItem = ({ target }) => {
    const expandedFlag = 'expanded';
    const collapsedFlag = 'collapsed';
    const timeline = target.closest('.timeline-item');
    const isExpanded = target.classList.contains(expandedFlag);
    const hasMultipleItems = target.classList.contains('multiple-items');

    if (!hasMultipleItems) {
      return false;
    }

    const iconExpand = target.querySelector('.icon-expand');
    const iconCollapse = target.querySelector('.icon-collapse');

    if (!isExpanded) {
      target.classList.add(expandedFlag);
      target.classList.remove(collapsedFlag);
      timeline.classList.add(expandedFlag);
      timeline.classList.remove(collapsedFlag);
      target.setAttribute('title', 'Collapse timeline');
      iconExpand.classList.remove('active');
      iconCollapse.classList.add('active');
    } else {
      target.classList.remove(expandedFlag);
      target.classList.add(collapsedFlag);
      timeline.classList.remove(expandedFlag);
      timeline.classList.add(collapsedFlag);
      target.setAttribute('title', 'Expand timeline');
      iconExpand.classList.add('active');
      iconCollapse.classList.remove('active');
    }
  };

  /**
   * @description On change sorting
   * @param nextSortingOptionId
   */
  onChangeSorting = ({ direction }) => {
    const { targetKey } = this.props;
    const { groupedItems, sortingOptions } = this.state;
    const selectedSortingOption = shape(sortingOptions).filterByProp('isSelected', true).fetchIndex(0);
    const nextSortingOptions = sortingOptions.map(sortingOption => ({
      ...sortingOption,
      isSelected: sortingOption.direction === direction
    }));

    this.setState({ sortingOptions: nextSortingOptions }, () => {
      if (selectedSortingOption.direction === direction) {
        return false;
      }

      const nextSortedGroupedItems = sortTimeline(groupedItems, direction, targetKey);
      this.setState({ groupedItems: nextSortedGroupedItems }, this.normalizeUI);
    });
  };

  /**
   * @description Normalize UI
   */
  normalizeUI = () => {
    selectAll('.trigger.toggle-grouped-items', this.refComponent).each(trigger => {
      const iconExpand = trigger.querySelector('.icon-expand');
      const iconCollapse = trigger.querySelector('.icon-collapse');
      if (isObj(iconExpand)) {
        iconExpand.classList.add('active');
      }
      if (isObj(iconCollapse)) {
        iconCollapse.classList.remove('active');
      }
      trigger.classList.remove('expanded');
    });
  };

  render() {
    const { title = '', targetKey, direction = 'vertical', displayItem = () => {}, formatDate } = this.props;
    const { groupedItems, sortingOptions } = this.state;
    const { length } = groupedItems;
    const selectedSortingOption = shape(sortingOptions).filterByProp('isSelected', true).fetchIndex(0);
    const isDesc = selectedSortingOption.id === 'desc';

    return (
      <div
        className="component"
        data-component="timeline"
        data-direction={direction}
        ref={node => {
          this.refComponent = node;
        }}
      >
        <div className="component-header">
          {title !== '' && (
            <span className="title">{title}</span>
          )}
          <Dropdown
            title="Sort"
            text="Sort timeline"
            triggerText="Sort timeline"
            isCloseOnSelect={true}
            items={sortingOptions}
            onChange={this.onChangeSorting}
          />
        </div>

        <div className="component-body">
          <ul className="timeline-items">

            {groupedItems.map(({ id, items }, index) => (
              <li
                key={id}
                className={`timeline-item collapsed ${(index < length - 1 || length === 2) && isObj(groupedItems[index + 1])
                  ? `time-spacing-${getTimeSpacing(
                    items[0][targetKey],
                    groupedItems[index + 1].items[0][targetKey],
                    isDesc
                  )}`
                  : ''}`}
              >

                {items.length > 0 && (
                  <span className="timeline-item-date" title="Timeline date">
                    {isFunc(formatDate) ? formatDate(items[0][targetKey]) : new Date(items[0][targetKey]).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
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
                    <span className="icons-box">
                      <Icon name="add" className="icon-expand active" />
                      <Icon name="remove" className="icon-collapse" />
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
                      <li key={uid()} className="grouped-item">
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
