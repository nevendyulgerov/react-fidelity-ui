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

#### Breadcrumbs
Breadcrumbs component. This component offers a number of UI configurations via its options.

##### Example

```javascript
import React, { Component } from 'react';
import { Breadcrumbs } from 'react-fidelity-ui';

const BreadcrumbsComponent = () => (
  <Breadcrumbs
    isToggleableOnMobile={true} // boolean, default = true, optional
    isStackedOnMobile={false} // boolean, default = true, optional
    items={[{ url: '', name: '', isSelected: false }]} // array of objects, required
    onChange={({ url, name, isSelected, event }) => {}} // function, optional
  />
);
```

#### Dropdown
Multi-purpose dropdown component. This component supports single/multi select, items filtering, adding new items, integration for tagging. This component can also take advantage of several helper methods from the `utils` space.

##### Example

```javascript
import React, { Component } from 'react';
import { Dropdown, utils } from 'react-fidelity-ui';

const { changeMultiSelect } = utils;

const DropdownComponent = ({ items, onChangeItems }) => (
  <Dropdown
    title="Dropdown" // string, default = hidden, optional
    text="Text" // string, default = hidden, optional
    triggerText="Trigger text" // string, default = '', optional
    items={[{ url: '', name: '', isSelected: false }]} // array of objects, required
    onChange={(selectedId, isSelected) => {
      const nextItems = changeMultiSelect(items, selectedId, isSelected);
      onChangeItems({ items: nextItems });
    }}
  />
);
```

#### Timeline
Timeline component. This component supports horizontal/vertical display, asc/desc sorting. This component works with any array of objects, containing a date field.

#### Notification
Notifications component. This component displays static messages to the DOM.

#### Alert
Alerts component. This component displays alert messages (info/success/warning/error) to the DOM.

#### Panel
General-purpose panel component. It comes with a number of built-in themes. This component can be utilized within other components like `Dropdown` and `Timeline`.

#### Tag
Tag component. It can be utilized within other components like `Dropdown` and `Timeline`.

#### Loader
Loader component. This component displays a loading spinner.

#### Icon
Icon component. It displays svg icons from the `fidelity-ui` icons pack.

#### Stat
Stat component. It displays an icon and a counter.
