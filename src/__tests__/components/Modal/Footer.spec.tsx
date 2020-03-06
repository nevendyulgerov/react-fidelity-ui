import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/Modal';
import { isObj } from '../../../utils';

describe('Components / Modal / Footer', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <Modal.Footer>
        Modal Footer
      </Modal.Footer>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('displays children', () => {
    const { baseElement } = render(
      <Modal.Footer>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
      </Modal.Footer>
    );
    const node = baseElement.querySelector('.modal__footer');

    // @ts-ignore
    expect(node.children.length).toBe(2);
  });

  it('attaches given className', () => {
    const className = 'modal__footer-xyz';
    const { baseElement } = render(
      <Modal.Footer className={className}>
        Modal Footer
      </Modal.Footer>
    );
    const node = baseElement.querySelector(`.${className}`);

    expect(isObj(node)).toBe(true);
  });

  it('adds given style prop', () => {
    const style = { height: '20px' };
    const { baseElement } = render(
      <Modal.Footer style={style}>
        Modal Footer
      </Modal.Footer>
    );
    const node = baseElement.querySelector('.modal__footer');

    // @ts-ignore
    expect(getComputedStyle(node).height).toBe(style.height);
  });

  it('adds given callback prop', () => {
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    const { baseElement } = render(
      <Modal.Footer onClick={onClick}>
        Modal Footer
      </Modal.Footer>
    );
    const node = baseElement.querySelector('.modal__footer');

    // @ts-ignore
    fireEvent.click(node);

    expect(isClickTriggered).toBe(true);
  });

  it('adds given role prop', () => {
    const role = 'footer-role';
    const { baseElement } = render(
      <Modal.Footer role={role}>
        Modal Footer
      </Modal.Footer>
    );
    const node = baseElement.querySelector('.modal__footer');

    // @ts-ignore
    expect(node.getAttribute('role')).toBe(role);
  });
});
