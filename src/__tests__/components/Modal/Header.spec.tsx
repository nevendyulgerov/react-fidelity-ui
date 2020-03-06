import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Header', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal.Header>
        Modal Header
      </Modal.Header>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal.Header>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal.Header>
    );
    const node = baseElement.querySelector('.modal__header');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal__header-xyz';
    const { baseElement } = render(
      <Modal.Header className={className}>
        Modal
      </Modal.Header>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal.Header style={style}>
        Modal
      </Modal.Header>
    );
    const node = baseElement.querySelector('.modal__header');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal.Header onClick={onClick}>
        Modal
      </Modal.Header>
    );
    const node = baseElement.querySelector('.modal__header');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'header-role';
    const { baseElement } = render(
      <Modal.Header role={role}>
        Modal
      </Modal.Header>
    );
    const node = baseElement.querySelector('.modal__header');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
