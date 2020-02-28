import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Dropdown from '../../../components/Dropdown';
import { isObj } from '../../../utils';

describe('Components / Dropdown / Divider', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Dropdown.Divider />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('attaches given className', () => {
    const className = 'dropdown__divider-xyz';
    const { baseElement } = render(
      <Dropdown.Divider className={className} />
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Dropdown.Divider style={style} />
    );
    const node = baseElement.querySelector('.dropdown__divider');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Dropdown.Divider onClick={onClick} />
    );
    const node = baseElement.querySelector('.dropdown__divider');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'dropdown-divider';
    const { baseElement } = render(
      <Dropdown.Divider role={role} />
    );
    const node = baseElement.querySelector('.dropdown__divider');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
