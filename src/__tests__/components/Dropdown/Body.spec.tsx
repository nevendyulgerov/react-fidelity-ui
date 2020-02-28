import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';
import { isObj } from '../../../utils';

describe('Components / Dropdown / Body', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Dropdown.Body>
        Dropdown Body
      </Dropdown.Body>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Dropdown.Body>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'dropdown__body-xyz';
    const { baseElement } = render(
      <Dropdown.Body className={className}>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Dropdown.Body style={style}>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown.Body onClick={onClick}>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'dropdown-body';
    const { baseElement } = render(
      <Dropdown.Body role={role}>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });

  it('activates dropdown body', () => {
    const { baseElement } = render(
      <Dropdown.Body active>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body--active');

    // @ts-ignore
    expect(isObj(node)).toBe(true);
  });

  it('deactivates dropdown body', () => {
    const { baseElement } = render(
      <Dropdown.Body active={false}>
        Dropdown
      </Dropdown.Body>
    );
    const node = baseElement.querySelector('.dropdown__body--active');

    // @ts-ignore
    expect(isObj(node)).toBe(false);
  });

  it('applies correct size', () => {
    const { baseElement, rerender } = render(
      <Dropdown.Body>
        Dropdown
      </Dropdown.Body>
    );

    Dropdown.Body.sizes.forEach((size) => {
      rerender(
        <Dropdown.Body size={size}>
          Dropdown
        </Dropdown.Body>
      );
      const node = baseElement.querySelector(`.dropdown__body--size-${size}`);
      expect(isObj(node)).toBe(true);
    });
  });

  it('applies correct size', () => {
    const invalidSize = 'invalid-size';
    const { baseElement } = render(
      <Dropdown.Body size={invalidSize}>
        Dropdown
      </Dropdown.Body>
    );

    const node = baseElement.querySelector(`.dropdown__body--size-${invalidSize}`);
    expect(isObj(node)).toBe(false);
  });
});
