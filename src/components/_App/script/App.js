import React, { Component } from 'react';
import moment from 'moment';
import Checkbox from '../../Checkbox/';
import Timeline from '../../Timeline/';
import Panel from '../../Panel/';
import Tag from '../../Tag/';
import Notification from '../../Notification/';
import Icon from '../../Icon/';
import Loader from '../../Loader';
import Breadcrumbs from '../../Breadcrumbs/';
import Dropdown, {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset
} from '../../Dropdown/';
import StackableAlerts from '../../StackableAlerts/';
import Alert from '../../Alert/';
import { createItems } from './Utils';
import { select } from '../../../utils/ammo';

const defaultBreadcrumbs = createItems(5);
const defaultTags = createItems(40);
const defaultDropdownItems = createItems(10);
const defaultTimelineVerticalItems = createItems(5);
const defaultTimelineHorizontalItems = createItems(30);

class App extends Component {
  state = {
    breadcrumbs: defaultBreadcrumbs,
    tags: defaultTags,
    dropdownItems: defaultDropdownItems,
    initialDropdownItems: defaultDropdownItems,
    timelineVerticalItems: defaultTimelineVerticalItems,
    timelineHorizontalItems: defaultTimelineHorizontalItems,
    isLoaderLoading: true,
    isChecked: false,
    isInfoAlertVisible: false,
    isSuccessAlertVisible: false,
    isWarningAlertVisible: false,
    isErrorAlertVisible: false
  };

  /**
   * @description Change single select
   * @param id
   */
  changeSingleSelect = ({ id }) => {
    const { dropdownItems } = this.state;
    const nextDropdownItems = changeSingleSelect(dropdownItems, id);
    this.setState({ dropdownItems: nextDropdownItems }, () => this.setState({ initialDropdownItems: nextDropdownItems }));
  };

  /**
   * @description Change multi select
   * @param id
   * @param isSelected
   */
  changeMultiSelect = ({ id }, isSelected) => {
    const { dropdownItems } = this.state;
    const nextDropdownItems = changeMultiSelect(dropdownItems, id, isSelected);
    this.setState({ dropdownItems: nextDropdownItems }, () => {
      const component = this.getNode();
      syncDropdownMenuOffset(component);
      this.setState({ initialDropdownItems: nextDropdownItems });
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
    const {
      tags,
      breadcrumbs,
      dropdownItems,
      initialDropdownItems,
      timelineVerticalItems,
      timelineHorizontalItems,
      isChecked,
      isLoaderLoading,
      isInfoAlertVisible,
      isSuccessAlertVisible,
      isWarningAlertVisible,
      isErrorAlertVisible
    } = this.state;

    return (
      <div data-component="fidelity-ui-test-app">

        <div className="demo-box" data-demo="alert">
          <span className="title">
            {'Alert'}
          </span>
          <div className="actions">
            <button
              className="trigger toggle-info-alert"
              disabled={isInfoAlertVisible}
              onClick={() => this.setState({
                isInfoAlertVisible: true
              })}
            >
              {'Info alert'}
            </button>
            <button
              className="trigger toggle-success-alert"
              disabled={isSuccessAlertVisible}
              onClick={() => this.setState({
                isSuccessAlertVisible: true
              })}
            >
              {'Success alert'}
            </button>
            <button
              className="trigger toggle-warning-alert"
              disabled={isWarningAlertVisible}
              onClick={() => this.setState({
                isWarningAlertVisible: true
              })}
            >
              {'Warning alert'}
            </button>
            <button
              className="trigger toggle-error-alert"
              disabled={isErrorAlertVisible}
              onClick={() => this.setState({
                isErrorAlertVisible: true
              })}
            >
              {'Error alert'}
            </button>
          </div>

          <StackableAlerts>
            <Alert
              type="info"
              title="Alert"
              content="Info alert with 'settings' icon"
              isVisible={isInfoAlertVisible}
              isConfirm={true}
              icon="settings"
              onCancel={() => {
                this.setState({ isInfoAlertVisible: false });
              }}
              onConfirm={() => {
                this.setState({ isInfoAlertVisible: false });
              }}
            />
            <Alert
              type="success"
              title="Success"
              content="Default success alert"
              isVisible={isSuccessAlertVisible}
              onCancel={() => {
                this.setState({ isSuccessAlertVisible: false });
              }}
            />
            <Alert
              type="warning"
              title="Warning"
              content="Default warning alert"
              isVisible={isWarningAlertVisible}
              onCancel={() => {
                this.setState({ isWarningAlertVisible: false });
              }}
            />
            <Alert
              type="error"
              title="Error"
              content="Default error alert"
              isVisible={isErrorAlertVisible}
              onCancel={() => {
                this.setState({ isErrorAlertVisible: false });
              }}
            />
          </StackableAlerts>
        </div>

        <div className="demo-box" data-demo="breadcrumbs">
          <span className="title">
            {'Breadcrumbs'}
          </span>
          <div className="demo">
            <Breadcrumbs
              isToggleableOnMobile={true}
              isStackedOnMobile={false}
              items={breadcrumbs}
              onChange={({ url, event }) => {
                event.preventDefault();
                console.log(url);
              }}
            />
          </div>
        </div>

        <div className="demo-box" data-demo="checkbox">
          <span className="title">
            {'Checkbox'}
          </span>
          <div className="demo">
            <Checkbox
              id="test-abc"
              isChecked={isChecked}
              labelText="Tick to activate"
              labelTitle="Tick to activate title"
              onChange={() => this.setState(({ isChecked }) => ({ isChecked: !isChecked }))}
            />
          </div>
        </div>

        <div className="demo-box" data-demo="dropdown">
          <span className="title">
            {'Dropdown'}
          </span>
          <div className="demo">
            <Dropdown
              title="Dropdown"
              text="Text"
              triggerText="Trigger text"
              addItemTitle="Add"
              isFilterable={true}
              items={dropdownItems}
              onChange={this.changeMultiSelect}
              onFilter={filterText => {
                const nextDropdownItems = filterItemsByName(initialDropdownItems, filterText);
                this.setState({ dropdownItems: nextDropdownItems });
              }}
              onDisplaySelectedItems={nextDropdownItems => (
                <div className={`inline-tags ${nextDropdownItems.length > 0 ? 'has-tags' : ''}`}>
                  {nextDropdownItems.length === 0 ? 'Select tags' : nextDropdownItems.map(({ id, name }) => (
                    <Tag
                      key={id}
                      name={name}
                      onRemove={() => {
                        const nextDropdownItems = deselectItem(dropdownItems, id);
                        this.setState({ dropdownItems: nextDropdownItems }, () => {
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
        </div>

        <div className="demo-box" data-demo="icon">
          <span className="title">
            {'Icon'}
          </span>
          <div className="demo">
            <Icon name="add" title="add" />
            <Icon name="comment" title="comment" />
            <Icon name="downvote" title="downvote" />
            <Icon name="edit" title="edit" />
            <Icon name="filter" title="filter" />
            <Icon name="more" title="more" />
            <Icon name="next" title="next" />
            <Icon name="notification" title="notification" />
            <Icon name="previous" title="previous" />
            <Icon name="remove" title="remove" />
            <Icon name="search" title="search" />
            <Icon name="select" title="select" />
            <Icon name="settings" title="settings" />
            <Icon name="stats" title="stats" />
            <Icon name="tick" title="tick" />
            <Icon name="upvote" title="upvote" />
          </div>
        </div>

        <div className="demo-box" data-demo="loader">
          <span className="title">
            {'Loader'}
          </span>
          <div className="demo">
            <Loader isLoading={isLoaderLoading} />
          </div>
        </div>

        <div className="demo-box" data-demo="notification">
          <span className="title">
            {'Notification'}
          </span>
          <div className="demo">
            <Notification type="info" text="Info" />
            <Notification type="success" text="Success" icon="upvote" />
            <Notification type="warning" text="Warning" icon="edit" />
            <Notification type="error" text="Error" icon="more" />
          </div>
        </div>

        <div className="demo-box" data-demo="stat">
          <span className="title">
            {'Panel'}
          </span>
          <div className="demo">
            <Panel theme="stat" item={{ icon: 'stats', count: 2 }} />
            <Panel theme="stat" item={{ icon: 'edit', count: 3 }} />
            <Panel theme="stat" item={{ icon: 'comment', count: 10 }} />
            <Panel theme="stat" item={{ icon: 'upvote', count: 4 }} />
          </div>
        </div>

        <div className="demo-box" data-demo="tag">
          <span className="title">
            {'Tag'}
          </span>
          <div className="demo">
            {tags.map(tag => (
              <Tag
                key={tag.id}
                name={tag.name}
                onRemove={() => {
                  const nextTags = tags.filter(nextTag => nextTag.id !== tag.id);
                  this.setState({ tags: nextTags });
                }}
              />
            ))}
          </div>
        </div>

        <div className="demo-box" data-demo="timeline">
          <span className="title">
            {'Timeline'}
          </span>
          <div className="demo">
            <Timeline
              title="Timeline"
              targetKey="created_at"
              items={timelineVerticalItems}
              displayItem={({ name, created_at, thumbnail, note }) => (
                <Panel
                  item={{
                    name,
                    thumbnail,
                    note,
                    date: moment(created_at).format('HH:mm')
                  }}
                />
              )}
            />
            <Timeline
              title="Timeline"
              direction="horizontal"
              targetKey="created_at"
              items={timelineHorizontalItems}
              displayItem={({ name, created_at, thumbnail, note }) => (
                <Panel
                  theme="card"
                  item={{
                    name,
                    thumbnail,
                    note,
                    date: moment(created_at).format('HH:mm')
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
