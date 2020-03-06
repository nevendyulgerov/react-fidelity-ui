import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';
import { isObj } from '../../../utils';

describe('Components / Dropdown', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Dropdown>
        Dropdown
      </Dropdown>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Dropdown>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'dropdown-abc';
    const { baseElement } = render(
      <Dropdown className={className}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Dropdown style={style}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown onClick={onClick}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'menu';
    const { baseElement } = render(
      <Dropdown role={role}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });

  it('activates dropdown', () => {
    const { baseElement } = render(
      <Dropdown active>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown--active');

    // @ts-ignore
    expect(isObj(node)).toBe(true);
  });

  it('deactivates dropdown', () => {
    const { baseElement } = render(
      <Dropdown active={false}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown--active');

    // @ts-ignore
    expect(isObj(node)).toBe(false);
  });

  it('calls "onClickOutside" callback when click event is triggered outside', () => {
    let isTriggered = false;
    const onClickOutside = () => {
      isTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown onClickOutside={onClickOutside}>
        Dropdown
      </Dropdown>
    );

    // @ts-ignore
    fireEvent.click(baseElement);

    // @ts-ignore
    expect(isTriggered).toBe(true);
  });

  it('does not call "onClickOutside" callback when click event is triggered inside', () => {
    let isTriggered = false;
    const onClickOutside = () => {
      isTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown onClickOutside={onClickOutside}>
        Dropdown
      </Dropdown>
    );
    const node = baseElement.querySelector('.dropdown');

    // @ts-ignore
    fireEvent.click(node);

    // @ts-ignore
    expect(isTriggered).toBe(false);
  });
});
