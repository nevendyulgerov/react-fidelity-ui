import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Body', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal.Body>
        Modal Body
      </Modal.Body>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal.Body>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal.Body>
    );
    const node = baseElement.querySelector('.modal__body');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal__body-xyz';
    const { baseElement } = render(
      <Modal.Body className={className}>
        Modal Body
      </Modal.Body>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal.Body style={style}>
        Modal Body
      </Modal.Body>
    );
    const node = baseElement.querySelector('.modal__body');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal.Body onClick={onClick}>
        Modal Body
      </Modal.Body>
    );
    const node = baseElement.querySelector('.modal__body');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'modal-body';
    const { baseElement } = render(
      <Modal.Body role={role}>
        Modal Body
      </Modal.Body>
    );
    const node = baseElement.querySelector('.modal__body');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
