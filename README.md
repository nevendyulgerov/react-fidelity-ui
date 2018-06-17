<!-- Logo -->
<p align="center">
  <a href="https://react.semantic-ui.com">
    <img height="128" width="128" src="./src/images/logo.png">
  </a>
</p>

<!-- Name -->
<h1 align="center">
  <a href="https://react.semantic-ui.com/">React Fidelity UI</a>
</h1>
<p align="center">High-fidelity UI pack for ReactJS</p>


## Installation

Run `npm install --save react-fidelity-ui`

## Principles

- Simple declarative API
- Highly configurable
- Semantic markup
- Atomic design
- CSS-based animations and effects

## Components

#### Dropdown
Multi-purpose dropdown component. It supports single/multi select, items filtering, adding new items and tags. This component works with array of objects with schema:

```javascript
[{
  id: 1, // string/number
  name: 'Item A', // string
  isSelected: true // boolean
}, {
  id: 2,
  name: 'Item B',
  isSelected: false
}]
```

#### Timeline
Timeline component. It supports horizontal/vertical display, asc/desc sorting. This component works with any array of objects, containing a date field.

#### Breadcrumbs
Breadcrumbs component. This component works with array of objects with schema:

```javascript
[{
  id: 1, // string/number
  name: 'Item A', // string
  isSelected: true // boolean
}, {
  id: 2,
  name: 'Item B',
  isSelected: false
}]
```

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

#### Grid
Coming soon...

#### TextEditor
Coming soon...

#### Board
Coming soon...
