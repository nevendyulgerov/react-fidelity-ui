import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';
import { isObj } from '../../../utils';

describe('Components / Dropdown / Text', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Dropdown.Text>
        Dropdown Text
      </Dropdown.Text>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Dropdown.Text>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Dropdown.Text>
    );
    const node = baseElement.querySelector('.dropdown__text');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'dropdown__text-xyz';
    const { baseElement } = render(
      <Dropdown.Text className={className}>
        Dropdown
      </Dropdown.Text>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Dropdown.Text style={style}>
        Dropdown
      </Dropdown.Text>
    );
    const node = baseElement.querySelector('.dropdown__text');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown.Text onClick={onClick}>
        Dropdown
      </Dropdown.Text>
    );
    const node = baseElement.querySelector('.dropdown__text');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'dropdown-text';
    const { baseElement } = render(
      <Dropdown.Text role={role}>
        Dropdown
      </Dropdown.Text>
    );
    const node = baseElement.querySelector('.dropdown__text');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
