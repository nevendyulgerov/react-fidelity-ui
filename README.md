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
Breadcrumbs component. This component works with array of objects with schema:

##### Object schema:

```javascript
[{
  url: 'https://google.com', // string
  name: 'Google', // string
  isSelected: true // boolean
}, {
  url: 'https://yahoo.com,
  name: 'Yahoo',
  isSelected: false
}]
```

##### Example

```javascript
import React, { Component } from 'react';
import { Dropdown, utils } from 'react-fidelity-ui';

const { changeMultiSelect } = utils;

class App extends Component {
  state = {
    items: [{
      url: 'https://google.com', // string
      name: 'Google', // string
      isSelected: true // boolean
    }, {
      url: 'https://yahoo.com,
      name: 'Yahoo',
      isSelected: false
    }]
  };
  render() {
    const { items } = this.state;
    return (
      <div className="app">
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
    );
  }
}
```

##### Defaults

```javascript
import React, { Component } from 'react';
import { Breadcrumbs } from 'react-fidelity-ui';

const BreadcrumbsComponent = ({ title, text, items }) => (
  <Breadcrumbs
    isToggleableOnMobile={true} // boolean, default = true
    isStackedOnMobile={false} // boolean, default = true
    items={createItems(5)} // array of objects
    onChange={({ url, name, isSelected, event }) => {}} // function
  />
);
```

#### Dropdown
Multi-purpose dropdown component. This component supports single/multi select, items filtering, adding new items. This component works with array of objects with schema:

```javascript
[{
  name: 'Item A', // string
  isSelected: true // boolean
}, {
  name: 'Item B',
  isSelected: false
}]
```

#### Timeline
Timeline component. This component supports horizontal/vertical display, asc/desc sorting. This component works with any array of objects, containing a date field.


#### Notification
Notifications component. This component displays static messages to the DOM.

#### Panel
General-purpose panel component. It comes with a number of built-in themes. This component can be utilized within other components like `Dropdown` and `Timeline`.

#### Tag
Tag component. It can be utilized within other components like `Dropdown` and `Timeline`.

#### Loader
Loader component. This component displays a loading spinner.

#### Icon
Icon component. It displays svg icons from the `fidelity-ui` icons pack.
