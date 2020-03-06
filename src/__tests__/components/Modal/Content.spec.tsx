import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Content', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal.Content>
        Modal Content
      </Modal.Content>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal.Content>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal.Content>
    );
    const node = baseElement.querySelector('.modal__content');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal__content-xyz';
    const { baseElement } = render(
      <Modal.Content className={className}>
        Modal Content
      </Modal.Content>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal.Content style={style}>
        Modal Content
      </Modal.Content>
    );
    const node = baseElement.querySelector('.modal__content');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal.Content onClick={onClick}>
        Modal Content
      </Modal.Content>
    );
    const node = baseElement.querySelector('.modal__content');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'modal-content';
    const { baseElement } = render(
      <Modal.Content role={role}>
        Modal Content
      </Modal.Content>
    );
    const node = baseElement.querySelector('.modal__content');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });

  it('applies correct given size', () => {
    const { baseElement, rerender } = render(
      <Modal.Content>
        Dropdown
      </Modal.Content>
    );

    Modal.Content.sizes.forEach((size) => {
      rerender(
        <Modal.Content size={size}>
          Modal Content
        </Modal.Content>
      );
      const node = baseElement.querySelector(`.modal__content--size-${size}`);
      expect(isObj(node)).toBe(true);
    });
  });

  it('does not apply incorrect given size', () => {
    const invalidSize = 'invalid-size';
    const { baseElement } = render(
      <Modal.Content size={invalidSize}>
        Modal Content
      </Modal.Content>
    );

    const node = baseElement.querySelector(`.modal__content--size-${invalidSize}`);
    expect(isObj(node)).toBe(false);
  });
});
