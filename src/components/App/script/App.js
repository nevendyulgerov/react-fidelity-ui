import React, { Component } from 'react';
import moment from 'moment';
import Checkbox from '../../Checkbox/';
import Timeline from '../../Timeline/';
import Panel from '../../Panel/';
import Dropdown, { changeSingleSelect, changeMultiSelect } from '../../Dropdown/';
import { randomInclusive } from '../../../utils/ammo';

const createItems = (count = 10) => {
  const items = [];
  for ( let i = 0; i < count; i++ ) {
    const isNewDate = randomInclusive(0, 10) > 6;
    const subTrackedDays = randomInclusive(0, 365);
    items.push({
      id: i,
      name: `Item ${i}`,
      isSelected: false,
      created_at: isNewDate
        ? moment(new Date()).subtract(subTrackedDays, 'days')
        : moment(i > 0 ? items[i - 1].created_at : new Date())
    });
  }
  return items;
};

class App extends Component {
  state = {
    items: [],
    isChecked: false
  };

  componentDidMount() {
    const defaultItems = createItems(30);
    this.setState({ items: defaultItems });
  }

  /**
   * @description Change single select
   * @param selectedId
   */
  changeSingleSelect = selectedId => {
    const { items } = this.state;
    const nextItems = changeSingleSelect(items, selectedId);
    this.setState({ items: nextItems });
  };

  /**
   * @description Change multi select
   * @param selectedId
   * @param isSelected
   */
  changeMultiSelect = (selectedId, isSelected) => {
    const { items } = this.state;
    const nextItems = changeMultiSelect(items, selectedId, isSelected);
    this.setState({ items: nextItems });
  };

  render() {
    const { items, isChecked } = this.state;

    return (
      <div data-component="app">
        <div className="dropdown">
          <Dropdown
            title="Dropdown"
            text="Text"
            triggerText="Trigger text"
            items={items}
            onChange={this.changeMultiSelect}
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
            theme="vertical"
            items={items}
            displayItem={({ name, created_at }) => {
              return (
                <Panel item={{ name, date: moment(created_at).format('MMM, DD. YYYY') }} />
              )
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;

