import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProgressBar from '../../../components/Progress/Bar';
import { isObj } from '../../../utils';

describe('Components / Progress / Bar', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<ProgressBar value={25} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('attaches className "progress__bar" to wrapper', () => {
    const { baseElement } = render(<ProgressBar value={25} />);
    const progressBarNode = baseElement.querySelector('.progress__bar');

    expect(isObj(progressBarNode)).toBe(true);
  });

  it('assigns correct width', () => {
    const value = 25;
    const { baseElement } = render(<ProgressBar value={value} />);
    const progressBarNode = baseElement.querySelector('.progress__bar');

    // @ts-ignore
    expect(getComputedStyle(progressBarNode).width).toBe(`${value}%`);
  });

  it('attaches className matching "className" prop', () => {
    const className = 'my-selector';
    const { baseElement } = render(<ProgressBar value={25} className={className} />);
    const progressBarNode = baseElement.querySelector('.progress__bar');

    // @ts-ignore
    expect(progressBarNode.classList.contains(className)).toBe(true);
  });

  it('adds any prop to wrapper', () => {
    // test style prop
    const style = { height: '20px' };
    const { baseElement, rerender } = render(<ProgressBar value={25} style={style} />);
    const progressBarNode = baseElement.querySelector('.progress__bar');

    // @ts-ignore
    expect(getComputedStyle(progressBarNode).height).toBe(style.height);

    // test event/callback prop
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    rerender(<ProgressBar value={25} onClick={onClick} />);

    // @ts-ignore
    fireEvent.click(progressBarNode);

    expect(isClickTriggered).toBe(true);

    // test attribute prop
    const role = 'progressbar';
    rerender(<ProgressBar value={25} role={role} />);

    // @ts-ignore
    expect(progressBarNode.getAttribute('role')).toBe(role);
  });
});
