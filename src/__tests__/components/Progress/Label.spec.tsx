import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProgressLabel from '../../../components/Progress/Label';
import { isObj } from '../../../utils';

describe('Components / Progress / Label', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<ProgressLabel value={25} label="Abc" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('attaches className "progress__label" to wrapper', () => {
    const { baseElement } = render(<ProgressLabel value={25} label="Abc" />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    expect(isObj(progressLabelNode)).toBe(true);
  });

  it('displays label as inner html', () => {
    const label = 'Abc';
    const { baseElement } = render(<ProgressLabel value={25} label={label} />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    // @ts-ignore
    expect(progressLabelNode.innerHTML).toBe(label);
  });

  it('attaches className matching "className" prop', () => {
    const className = 'my-selector';
    const { baseElement } = render(<ProgressLabel value={25} label="Abc" className={className} />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    // @ts-ignore
    expect(progressLabelNode.classList.contains(className)).toBe(true);
  });

  it('adds any prop to wrapper', () => {
    // test style prop
    const style = { height: '20px' };
    const { baseElement, rerender } = render(<ProgressLabel value={25} label="Abc" style={style} />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    // @ts-ignore
    expect(getComputedStyle(progressLabelNode).height).toBe(style.height);

    // test event/callback prop
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    rerender(<ProgressLabel value={25} label="Abc" onClick={onClick} />);

    // @ts-ignore
    fireEvent.click(progressLabelNode);

    expect(isClickTriggered).toBe(true);

    // test attribute prop
    const role = 'role';
    rerender(<ProgressLabel value={25} label="Abc" role={role} />);

    // @ts-ignore
    expect(progressLabelNode.getAttribute('role')).toBe(role);
  });

  it('attaches className "progress__label--{alignment}" matching "alignment" prop', () => {
    let alignment = 'left';
    const { baseElement, rerender } = render(<ProgressLabel value={25} label="Abc" alignment={alignment} />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    // @ts-ignore
    expect(progressLabelNode.classList.contains(`progress__label--${alignment}`)).toBe(true);

    alignment = 'center';
    rerender(<ProgressLabel value={25} label="Abc" alignment={alignment} />);

    // @ts-ignore
    expect(progressLabelNode.classList.contains(`progress__label--${alignment}`)).toBe(true);

    alignment = 'sticky';
    rerender(<ProgressLabel value={25} label="Abc" alignment={alignment} />);

    // @ts-ignore
    expect(progressLabelNode.classList.contains(`progress__label--${alignment}`)).toBe(true);

    alignment = 'right';
    rerender(<ProgressLabel value={25} label="Abc" alignment={alignment} />);

    // @ts-ignore
    expect(progressLabelNode.classList.contains(`progress__label--${alignment}`)).toBe(true);
  });

  it('assigns correct right offset when "alignment" prop is set to "sticky"', () => {
    const value = 25;
    const { baseElement } = render(<ProgressLabel value={value} label="Abc" alignment="sticky" />);
    const progressLabelNode = baseElement.querySelector('.progress__label');

    // @ts-ignore
    expect(getComputedStyle(progressLabelNode).right).toBe(`${100 - value}%`);
  });
});
