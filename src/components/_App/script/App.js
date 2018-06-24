import React, { Component } from 'react';
import moment from 'moment';
import Checkbox from '../../Checkbox/';
import Timeline from '../../Timeline/';
import Panel from '../../Panel/';
import Tag from '../../Tag/';
import Notification from '../../Notification/';
import Breadcrumbs from '../../Breadcrumbs/';
import Dropdown, {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset
} from '../../Dropdown/';
import { randomInclusive, select } from '../../../utils/ammo';

const defaultThumbnail = 'https://wallpaperbits.com/wp-content/uploads/2018/01/google-nexus-5-wallpaper-154171-nature-landscape-mountain-nexus-5.jpg';

const createItems = (count = 10) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const isNewDate = randomInclusive(0, 10) > 6;
    const subTrackedDays = randomInclusive(0, 365);
    items.push({
      id: i,
      name: `Item ${i}`,
      url: 'https://google.com',
      isSelected: i === 0,
      thumbnail: defaultThumbnail,
      note: 'some note',
      created_at: isNewDate
        ? moment(new Date()).subtract(subTrackedDays, 'days')
        : moment(i > 0 ? items[i - 1].created_at : new Date())
    });
  }
  return items;
};

const defaultItems = createItems(30);

class App extends Component {
  state = {
    items: defaultItems,
    initialItems: defaultItems,
    isChecked: false
  };

  /**
   * @description Change single select
   * @param id
   */
  changeSingleSelect = ({ id }) => {
    const { items } = this.state;
    const nextItems = changeSingleSelect(items, id);
    this.setState({ items: nextItems }, () => this.setState({ initialItems: nextItems }));
  };

  /**
   * @description Change multi select
   * @param id
   * @param isSelected
   */
  changeMultiSelect = ({ id }, isSelected) => {
    const { items } = this.state;
    const nextItems = changeMultiSelect(items, id, isSelected);
    this.setState({ items: nextItems }, () => {
      const component = this.getNode();
      syncDropdownMenuOffset(component);
      this.setState({ initialItems: nextItems });
    });
  };

  /**
   * @description Get node
   * @returns {*}
   */
  getNode = () => {
    const app = select('[data-component="fidelity-ui-test-app"]').get();
    return select('[data-component="dropdown"]', app).get();
  };

  render() {
    const { items, initialItems, isChecked } = this.state;

    return (
      <div data-component="fidelity-ui-test-app">
        <div className="breadcrumbs">
          <Breadcrumbs
            isToggleableOnMobile={true}
            isStackedOnMobile={false}
            items={createItems(5)}
            onChange={({ url, event }) => {
              event.preventDefault();
              console.log(url);
            }}
          />
        </div>

        <div className="notification">
          <Notification text="info" />
        </div>

        <div className="dropdown">
          <Dropdown
            title="Dropdown"
            text="Text"
            triggerText="Trigger text"
            addItemTitle="Add"
            isFilterable={true}
            items={items}
            onChange={this.changeMultiSelect}
            onFilter={filterText => {
              const nextItems = filterItemsByName(initialItems, filterText);
              this.setState({ items: nextItems });
            }}
            onDisplaySelectedItems={selectedItems => (
              <div className={`inline-tags ${selectedItems.length > 0 ? 'has-tags' : ''}`}>
                {selectedItems.length === 0 ? 'Select tags' : selectedItems.map(({ id, name }) => (
                  <Tag
                    key={id}
                    name={name}
                    onRemove={() => {
                      const nextItems = deselectItem(items, id);
                      this.setState({ items: nextItems }, () => {
                        const component = this.getNode();
                        syncDropdownMenuOffset(component);
                      });
                    }}
                  />
                ))}
              </div>
            )}
          />
        </div>

        <div className="checkbox">
          <Checkbox
            id="test-abc"
            isChecked={isChecked}
            labelText="Tick to activate"
            labelTitle="Tick to activate title"
            onChange={() => this.setState(({ isChecked }) => ({ isChecked: !isChecked }))}
          />
        </div>

        <div className="timeline">
          <Timeline
            title="Timeline"
            targetKey="created_at"
            items={items}
            displayItem={({ name, created_at, thumbnail, note }) => (
              <Panel
                theme="card"
                item={{
                  name,
                  thumbnail,
                  note,
                  date: moment(created_at).format('HH:mm') }}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
