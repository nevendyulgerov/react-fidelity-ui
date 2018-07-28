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

Run `npm install react-fidelity-ui --save`

## Principles

- Declarative API
- Configurable components
- Semantic markup
- Atomic design
- CSS based animations and effects

## Components

- Alert
- Breadcrumbs
- Checkbox
- Dropdown
- Icon
- Loader
- Modal
- Notification
- Panel
- StackableAlerts
- Tag
- Timeline

### Alert
Alerts component. Alert offers 4 distinct alert types - info (default), success, warning and error. This component can be configured to require user confirmation or simply display a notification. This can be controlled via the `isConfirm` option.

#### Example

```javascript
import React from 'react';
import { Alert } from 'react-fidelity-ui';

const WarningAlert = ({ isVisible, onCancel, onConfirm }) => (
  <Alert
    type="warning" // string, default = 'info'
    title="Warning alert" // string, REQUIRED
    subtitle="Default warning alert" // string, default = ''
    closeTitle="Close" // string, default = 'Close'
    cancelText="Cancel" // string, default = 'Cancel'
    confirmText="OK" // string, default = 'OK'
    icon="tick" // string, default = '', when '', no icon is displayed
    isConfirm={false} // boolean, default = false
    isVisible={isVisible} // boolean, default = false
    onCancel={() => onCancel()} // function, default = () => {}, triggered on close/cancel events
    onConfirm={() => onConfirm()} // function, default = () => {}, triggered on confirm event
  />
);
```

### Breadcrumbs
Breadcrumbs component. Breadcrumbs offer a number of UI configurations for mobile screens via its options `isToggleableOnMobile` and `isStackedOnMobile`.

#### Example

```javascript
import React from 'react';
import { Breadcrumbs } from 'react-fidelity-ui';

const BreadcrumbsBox = (({ items }) => (
  <Breadcrumbs
    items={items} // array of objects, with schema { url, name, target = '_self', isSelected = false }, REQUIRED
    isLastActive={true} // boolean, default = true, when set to {false}, you need to pass items with schema { url, name, isSelected = false }
    isToggleableOnMobile={true} // boolean, default = true
    isStackedOnMobile={false} // boolean, default = true
    onChange={({ url, name, isSelected, event }) => {}} // function, default = () => {}
  />
);
```

### Checkbox
Checkbox component. Checkbox exposes a styled checkbox with default checkbox behavior.

#### Example

```javascript
import React from 'react';
import { Checkbox } from 'react-fidelity-ui';

const CheckboxComponent = ({ isChecked, onChange }) => (
  <Checkbox
    id="checkbox" // string, default = autogenerated uid
    labelText="Tick to activate" // string, default = ''
    labelTitle="Tick to activate" // string, default = ''
    isChecked={isChecked} // boolean, default = false
    isDisabled={false} // boolean, default = false
    onChange={event => onChange(event)} // function, default = () => {}
  />
);
```

### Dropdown
Multi-purpose dropdown component. Dropdown supports single/multi select, items filtering, adding new items, integration for tagging. This component can also take advantage of several helper methods from the `utils` space.

#### Example

```javascript
import React from 'react';
import { Dropdown, utils } from 'react-fidelity-ui';

const { changeSingleSelect } = utils;

const DropdownComponent = ({ items, onChangeItems }) => (
  <Dropdown
    title="Dropdown" // string, REQUIRED
    subtitle="Dropdown subtitle" // string, default = ''
    triggerText="Trigger text" // string, default = ''
    items={items} // array of objects, with schema [{ name: string, isSelected: boolean }], REQUIRED
    isFilterable={false} // boolean, default = ''
    filterPlaceholder="Filter results" // string, default = ''
    isAddable={false} // boolean, default = false
    addItemTitle="Add item" // string, default = ''
    isCloseOnSelect={true} // boolean, default = false
    isDisabled={false} // booleam, default = false
    isLoading={false} // boolean, default = false
    onDisplaySelectedItems={selectedItems => selectedItems.length} // function, default = undefined, when undefined, the function is not invoked
    onChange={({ name }, isSelected) => {
      // update items using multi select logic, using `name` as unique identifier
      const nextItems = changeMultiSelect(items, name, isSelected, 'name');
      onChangeItems({ items: nextItems });
    }} // function, REQUIRED
    onAddItem={filterText => {}) // function, default = () => {}
    onFilter{filterText => {}) // function, default = () => {}
    onToggleMenu{isMenuOpened => {}) // function, default = () => {}
  />
);
```

### Icon
Icon component exposing svg icons. Available icon names:

- add
- comment
- downvote
- edit
- filter
- more
- next
- notification
- previous
- remove
- search
- settings
- stats
- tick
- upvote

#### Example

```javascript
import React from 'react';
import { Icon } from 'react-fidelity-ui';

const UpvoteIcon = () => (
  <Icons
    name="upvote" // string, REQUIRED, one of the above icon names
    className="upvote-icon" // string, default = ''
    title="Upvote icon" // string, default = ''
  />
);
```

### Loader
Loader component displaying a spinner.

#### Example

```javascript
import React from 'react';
import { Loader } from 'react-fidelity-ui';

const Spinner = ({ isLoading }) => (
  <Loader
    isLoading={isLoading} // boolean, default = false
  />
);
```

### Modal
Modal component with standard dialog behavior. This component can be used in combination with the `modal` template of component `Panel`.

#### Example

```javascript
import React from 'react';
import { Modal, Panel } from 'react-fidelity-ui';

const ConfirmModal = ({ isActive, onCancel, onConfirm }) => (
  <Modal
    content={() => (
      <Panel
        template="modal"
        item={{
          title: 'Please confirm'
          content: 'Are you sure you want to proceed?'
          onCancel
          onConfirm
        }}
      />
    )} // function/component, REQUIRED
    isActive={isActive} // boolean, default = false
    onEscapeKey={onCancel} // function, default = () => {}
  />
);
```

### Notification
Notification component displaying static notifications. Notification has 4 distinct types - info (default), success, warning and error.

#### Example

```javascript
import React from 'react';
import { Notification } from 'react-fidelity-ui';

const SuccessNotification = () => (
  <Notification
    type="success" // string, default = 'info'
    note="Success" // string, REQUIRED
    title="Success title" // string, default = ''
    icon="upvote" // string, default = 'notification'
  />
);
```

### Panel
General purpose panel component. Panel supports a number of distinctive template via the `template` option.

#### Example

```javascript
import React, { Fragment } from 'react';
import { Panel } from 'react-fidelity-ui';

const Panels = () => (
  <Fragment>
    <Panel
      template="default" // string, default = 'default'
      item={{
        name: 'Default panel', // string, REQUIRED
        date: '2018-06-24', // string, REQUIRED
      }}
    />
    <Panel
      template="stat"
      item={{
        icon: 'likes', // string, REQUIRED
        count: 2 // number, REQUIRED
      }}
    />
    <Panel
      template="card"
      item={{
        thumbnail: 'image-url/example-image.jpg', // string, REQUIRED
        name: 'Card panel', // string, REQUIRED
        note: 'Note', // string/function, REQUIRED
        date: '2018-06-24' // string, REQUIRED
      }}
    />
    <Panel
      template="modal"
      item={{
        title: 'Modal title', // string, REQUIRED
        closeTitle: 'Close', // string, default = ''
        content: 'Lorem ipsum dolor sit amet', // string, default = ''
        cancelText: 'Cancel', // string, default = 'Cancel'
        cancelTitle: 'Close', // string, default = 'Close'
        confirmText: 'OK', // string, default = 'OK'
        confirmTitle: 'OK', // string, default = ''
        onCancel: () => {} // function, REQUIRED
        onConfirm: () => {} // function, REQUIRED
      }}
    />
  </Fragment>
);
```

### StackableAlerts
Wrapper component, designed to work with component `Alert`. It enables stacking of alerts, when multiple alerts are displayed.

#### Example

```javascript
import React from 'react';
import { StackableAlerts, Alert } from 'react-fidelity-ui';

const Alerts = () => (
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

### Tag
Tag component displaying a label and a remove button.

#### Example

```javascript
import React from 'react';
import { Tag } from 'react-fidelity-ui';

const TagBox = ({ name, onRemove }) => (
  <Tag
    name={name} // string, REQUIRED
    title="Tag" // string, default = ''
    removeTitle="Remove" // string, default = ''
    onRemove={name => {}} // function, REQUIRED
  />
);
```

### Timeline
Timeline component. This component can be customized via the `direction` option - `horizontal` or `vertical`. Timeline comes with a built-in sorting dropdown supporting asc/desc sorting.

#### Example

```javascript
import React from 'react';
import { Timeline, Panel } from 'react-fidelity-ui';
import moment from 'moment'; // using moment-js for this example

const HorizontalTimeline = ({ items }) => (
  <Timeline
    items={items} // array of objects, with schema [{ [dateField]: string }], REQUIRED
    title="Timeline" // string, REQUIRED
    direction="horizontal" // string, default = 'vertical'
    targetKey="created_at" // string, the key containing date information in your items array of objects, [dateField], REQUIRED
    displayItem={({ name, thumbnail, note, date }) => (
      <Panel
        template="card"
        item={{ name, thumbnail, note, date }}
      />
    )} // function, REQUIRED
    formatDate={date => moment(date).format('HH:mm')}} // function, default = undefined, not invoked when undefined
  />
);
```

## Styling

You can overwrite any of the base styles for any component using css/sass/StyledComponents. Here's how to do this with sass:

```javascript
import React from 'react';
import { Alert } from 'react-fidelity-ui';

const ErrorAlert = ({ isVisible, onClose }) => (
  <div className="alert error">
    <Alert
      type="error"
      title="Error"
      subtitle="Lorem ipsum dolor sit amet"
      isVisible={isVisible}
      onCancel={onClose}
    />
  </div>
);
```

```scss
.alert.error {
  [data-component=alert] {

    // overwrite error styles
    &[data-alert-type=error] {
      background-color: red;
      color: white;
    }

    // overwrite title and subtitle styles
    > .component-header {
      .title {
        text-transform: uppercase;
      }

      .subtitle {
        font-size: 12px;
      }
    }
  }
}
```

All `fidelity-ui` components follow this pattern for their html markup:

```jsx
<div data-component="{component-name}">
  <div className="component-header">
    header content
  </div>
  <div className="component-body>
    body content
  </div>
  <div className="component-footer">
    footer content
  </div>
</div>
```

Some components may lack certain parts of the above html schema. For instance, component `Tag` has only `component-body` html wrapper.
