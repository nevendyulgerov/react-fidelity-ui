import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';
import { isObj } from '../../../utils';

describe('Components / Dropdown / Item', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Dropdown.Item>
        Dropdown Item
      </Dropdown.Item>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Dropdown.Item>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'dropdown__item-xyz';
    const { baseElement } = render(
      <Dropdown.Item className={className}>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Dropdown.Item style={style}>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown.Item onClick={onClick}>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'dropdown-item';
    const { baseElement } = render(
      <Dropdown.Item role={role}>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });

  it('activates dropdown item', () => {
    const { baseElement } = render(
      <Dropdown.Item active>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item--active');

    // @ts-ignore
    expect(isObj(node)).toBe(true);
  });

  it('deactivates dropdown item', () => {
    const { baseElement } = render(
      <Dropdown.Item active={false}>
        Dropdown
      </Dropdown.Item>
    );
    const node = baseElement.querySelector('.dropdown__item--active');

    // @ts-ignore
    expect(isObj(node)).toBe(false);
  });
});
