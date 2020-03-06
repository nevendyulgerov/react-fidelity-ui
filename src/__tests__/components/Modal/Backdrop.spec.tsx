import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Backdrop', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal.Backdrop>
        Modal Backdrop
      </Modal.Backdrop>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal.Backdrop>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal.Backdrop>
    );
    const node = baseElement.querySelector('.modal__backdrop');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal__backdrop-xyz';
    const { baseElement } = render(
      <Modal.Backdrop className={className}>
        Modal Backdrop
      </Modal.Backdrop>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal.Backdrop style={style}>
        Modal Backdrop
      </Modal.Backdrop>
    );
    const node = baseElement.querySelector('.modal__backdrop');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal.Backdrop onClick={onClick}>
        Modal Backdrop
      </Modal.Backdrop>
    );
    const node = baseElement.querySelector('.modal__backdrop');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'modal-backdrop';
    const { baseElement } = render(
      <Modal.Backdrop role={role}>
        Modal Backdrop
      </Modal.Backdrop>
    );
    const node = baseElement.querySelector('.modal__backdrop');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
