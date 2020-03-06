import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Body', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal>
        Modal
      </Modal>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal>
    );
    const node = baseElement.querySelector('.modal');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal-xyz';
    const { baseElement } = render(
      <Modal className={className}>
        Modal
      </Modal>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal style={style}>
        Modal
      </Modal>
    );
    const node = baseElement.querySelector('.modal');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal onClick={onClick}>
        Modal
      </Modal>
    );
    const node = baseElement.querySelector('.modal');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'modal';
    const { baseElement } = render(
      <Modal role={role}>
        Modal
      </Modal>
    );
    const node = baseElement.querySelector('.modal');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });

  it('activates modal', () => {
    const { baseElement } = render(
      <Modal active>
        Dropdown
      </Modal>
    );
    const node = baseElement.querySelector('.modal--active');

    // @ts-ignore
    expect(isObj(node)).toBe(true);
  });

  it('deactivates modal', () => {
    const { baseElement } = render(
      <Modal active={false}>
        Dropdown
      </Modal>
    );
    const node = baseElement.querySelector('.modal--active');

    // @ts-ignore
    expect(isObj(node)).toBe(false);
  });
});
