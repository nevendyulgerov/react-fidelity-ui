<!-- Logo -->
<p>
  <a href="https://github.com/nevendyulgerov/react-fidelity-ui">
    <img height="128" width="128" src="http://lambdabunker.com/public-img/fidelity-ui-logo.png">
  </a>
</p>

<!-- Name -->
<h1>
  <a href="https://github.com/nevendyulgerov/react-fidelity-ui">React Fidelity UI</a>
</h1>

<p>High-fidelity UI pack for <a href="https://reactjs.org/" target="_blank">React</a>.</p>


## Installation

Run `npm install --save react-fidelity-ui`

## Principles

- Simple declarative API
- Highly configurable components
- Semantic markup
- Atomic design
- CSS based animations and effects

## Components

#### Alerts
Alerts component. Alerts offer 4 distinct alert types - info (default), success, warning and error. This component can be configured to require user confirmation or simply display a notification. This can be controlled via the `isConfirm` option.

##### Example

```javascript
import React from 'react';
import { Alert } from 'react-fidelity-ui';

const WarningAlert = ({ isVisible = false, onHide = () => {}, onConfirm = () => {} }) => (
  <Alert
    type="warning" // string, default = 'info'
    title="Warning alert" // string, default = ''
    isConfirm={true} // boolean, default = false
    content="Default warning alert" // string, default = ''
    isVisible={isVisible} // boolean, default = false
    onCancel={() => onHideAlert()} // function, default = () => {}
    onConfirm={() => onConfirm()} // function, default = () => {}
  />
);
```

#### Breadcrumbs
Breadcrumbs component. Breadcrumbs offer a number of UI configurations for mobile screens via its options `isToggleableOnMobile` and `isStackedOnMobile`.

##### Example

```javascript
import React from 'react';
import { Breadcrumbs } from 'react-fidelity-ui';

const BreadcrumbsComponent = ({ items ) => (
  <Breadcrumbs
    isToggleableOnMobile={true} // boolean, default = true
    isStackedOnMobile={false} // boolean, default = true
    isLastActive={true} // boolean, default = false, when set to {false}, you need to pass items with schema { url: string, name: string, isSelected: boolean }
    items={items} // array of objects, with schema [{ url: '', name: '' }], required
    onChange={({ url, name, isSelected, event }) => {}} // function, default = () => {}
  />
);
```

#### Checkbox
Checkbox component. Checkbox exposes a styled checkbox with default checkbox behavior.

##### Example

```javascript
import React from 'react';
import { Checkbox } from 'react-fidelity-ui';

const CheckboxComponent = ({ isChecked, onToggle = () => {} ) => (
  <Checkbox
    id="test-abc" // string/number, default = autogenerated uid
    isChecked={isChecked} // boolean, default = false
    labelText="Tick to activate" // string, default = ''
    labelTitle="Tick to activate" // string, default = ''
    onChange={() => onToggle()} // function, default = () => {}
  />
);
```

#### Dropdown
Multi-purpose dropdown component. Dropdown supports single/multi select, items filtering, adding new items, integration for tagging. This component can also take advantage of several helper methods from the `utils` space.

##### Example

```javascript
import React from 'react';
import { Dropdown, utils } from 'react-fidelity-ui';

const { changeMultiSelect } = utils;

const DropdownComponent = ({ items, onChangeItems }) => (
  <Dropdown
    title="Dropdown" // string, default = ''
    text="Text" // string, default = ''
    triggerText="Trigger text" // string, default = ''
    items={items} // array of objects, with schema [{ url: '', name: '', isSelected: false }], required
    onChange={(selectedId, isSelected) => {
      const nextItems = changeMultiSelect(items, selectedId, isSelected);
      onChangeItems({ items: nextItems });
    }}
  />
);
```

#### Icon
Icon component exposing svg icons.

##### Example

```javascript
import React from 'react';
import { Icon } from 'react-fidelity-ui';

const UpvoteIcon = () => (
  <Icon
    name="upvote" // string, default = 'comment'
    title="Upvote icon" // string, default = ''
  />
);
```

#### Loader
Loader component displaying a spinner.

##### Example

```javascript
import React from 'react';
import { Loader } from 'react-fidelity-ui';

const LoadingSpinner = ({ isLoading = false }) => (
  <Loader
    isLoading={isLoading} // boolean, default = false
  />
);
```

#### Notification
Notification component displaying static notifications. Notification offers 4 distinct notification types - info (default), success, warning and error.

##### Example

```javascript
import React from 'react';
import { Notification } from 'react-fidelity-ui';

const SuccessNotification = ({ isLoading }) => (
  <Notification
    type="success" // string, default = 'info'
    text="Success" // string, default = ''
    title="Success title" // string, default = ''
    icon="upvote" // string, default = 'notification'
  />
);
```

#### Panel
General purpose panel component. Panel supports a number of distinctive themes via the `theme` option.

##### Example

```javascript
import React from 'react';
import { Panel } from 'react-fidelity-ui';

const Panels = ({ isLoading }) => (
  <div data-component="panels">
    <Panel
      theme="card" // string, default = 'default'
      item={{
        name: 'Card panel', // string, required
        date: '2018-06-24' // string, required
      }}
    />
    <Panel
      item={{
        name: 'Default panel', // string, required
        date: '2018-06-24', // string, required
        thumbnail: 'stats', // string, required
        note: 'Some note' // string/function
      }}
    />
    <Panel
      theme="stat"
      item={{
        icon: 'stats', // string, required
        count: 2 // string/number, required
      }}
    />
  </div>
);
```

#### StackableAlerts
Wrapper components, designed to work with component `Alert`. It enables stacking of alerts, when multiple alerts are displayed.

##### Example

```javascript
import React from 'react';
import { StackableAlerts, Alert } from 'react-fidelity-ui';

const FilterTag = () => (
  <StackableAlerts>
    <Alert
      title="Info alert"
      isVisible={true}
    />
    <Alert
      type="success"
      title="Success alert"
      isVisible={true}
    />
    <Alert
      type="warning"
      title="Warning alert"
      isVisible={true}
    />
    <Alert
      type="error"
      title="Error alert"
      isVisible={true}
    />
  </StackableAlerts>
);
```

#### Tag
Tag component displaying a label and a remove button.

##### Example

```javascript
import React from 'react';
import { Tag } from 'react-fidelity-ui';

const FilterTag = ({ id, name, onRemove = () => {} }) => (
  <Tag
    name={tag.name} // string, required
    onRemove={() => onRemove(tag.id)} // function, default = undefined
  />
);
```

#### Timeline
Timeline component. This component can be customized via the `direction` option - `horizontal` or `vertical`. Timeline comes with a built-in sorting dropdown supporting asc/desc sorting.

##### Example

```javascript
import React from 'react';
import { Timeline, Tag } from 'react-fidelity-ui';

const HorizontalTimeline = ({ items }) => (
  <Timeline
    title="Timeline" // string, default = ''
    direction="horizontal" // string, default = 'vertical'
    targetKey="created_at" // string, the key containing date information in your items array of objects, [dateField], required
    items={items} // array of objects, with schema [{ [dateField]: string }], required
    displayItem={item => (
      <span>{JSON.stringify(item, null, 4)}</span>
    )} // function, default = () => {}
    formatDate={itemDate => (
      <span>{itemDate.substr(0, 3)}</span>
    )} // function, default = undefined
  />
);
```

