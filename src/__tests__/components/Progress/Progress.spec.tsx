import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Progress from '../../../components/Progress';
import { isObj } from '../../../utils';

describe('Components / Progress', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Progress value={25} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('displays bar node', () => {
    const { baseElement } = render(<Progress value={25} />);
    const progressLabelNode = baseElement.querySelector('.progress__bar');

    expect(isObj(progressLabelNode)).toBe(true);
  });

  it('displays label node when label is a non empty string', () => {
    const { baseElement } = render(
      <Progress
        value={25}
        label="lorem ipsum dolor sit amet"
      />
    );
    const progressLabelNode = baseElement.querySelector('.progress__label');

    expect(isObj(progressLabelNode)).toBe(true);
  });

  it('does not display label node when label is an empty string', () => {
    const { baseElement } = render(
      <Progress
        value={25}
        label=""
      />
    );
    const progressLabelNode = baseElement.querySelector('.progress__label');

    expect(isObj(progressLabelNode)).toBe(false);
  });

  it('displays label node when label is number', () => {
    const { baseElement } = render(
      <Progress
        value={25}
        label={25}
      />
    );
    const progressLabelNode = baseElement.querySelector('.progress__label');

    expect(isObj(progressLabelNode)).toBe(true);
  });

  it('displays label node when label is node', () => {
    const { baseElement } = render(
      <Progress
        value={25}
        label={<span>Label</span>}
      />
    );
    const progressLabelNode = baseElement.querySelector('.progress__label');

    expect(isObj(progressLabelNode)).toBe(true);
  });

  it('attaches className "progress" to wrapper', () => {
    const { baseElement } = render(<Progress value={25} />);
    const progressNode = baseElement.querySelector('.progress');

    expect(isObj(progressNode)).toBe(true);
  });

  it('attaches className "progress--rounded" to wrapper when "rounded" prop is set to "true"', () => {
    const { baseElement } = render(<Progress value={25} rounded />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains('progress--rounded')).toBe(true);
  });

  it('attaches className "progress--elevated" to wrapper when "elevated" prop is set to "true"', () => {
    const { baseElement } = render(<Progress value={25} elevated />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains('progress--elevated')).toBe(true);
  });

  it('attaches className "progress--hovered" hovered wrapper when "hovered" prop is set to "true"', () => {
    const { baseElement } = render(<Progress value={25} hovered />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains('progress--hovered')).toBe(true);
  });

  it('attaches className "progress--{type}" matching "type" prop', () => {
    let type = 'primary';
    const { baseElement, rerender } = render(<Progress value={25} type={type} />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);

    type = 'secondary';
    rerender(<Progress value={25} type={type} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);

    type = 'info';
    rerender(<Progress value={25} type={type} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);

    type = 'warning';
    rerender(<Progress value={25} type={type} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);

    type = 'success';
    rerender(<Progress value={25} type={type} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);

    type = 'danger';
    rerender(<Progress value={25} type={type} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${type}`)).toBe(true);
  });

  it('attaches className "progress--{size}" matching "size" prop', () => {
    let size = 'xs';
    const { baseElement, rerender } = render(<Progress value={25} size={size} />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${size}`)).toBe(true);

    size = 'sm';
    rerender(<Progress value={25} size={size} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${size}`)).toBe(true);

    size = 'md';
    rerender(<Progress value={25} size={size} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${size}`)).toBe(true);

    size = 'lg';
    rerender(<Progress value={25} size={size} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${size}`)).toBe(true);

    size = 'xl';
    rerender(<Progress value={25} size={size} />);

    // @ts-ignore
    expect(progressNode.classList.contains(`progress--${size}`)).toBe(true);
  });

  it('attaches className matching "className" prop', () => {
    const className = 'my-selector';
    const { baseElement } = render(<Progress value={25} className={className} />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(progressNode.classList.contains(className)).toBe(true);
  });

  it('adds any prop to wrapper', () => {
    // test style prop
    const style = { height: '20px' };
    const { baseElement, rerender } = render(<Progress value={25} style={style} />);
    const progressNode = baseElement.querySelector('.progress');

    // @ts-ignore
    expect(getComputedStyle(progressNode).height).toBe(style.height);

    // test event/callback prop
    let isClickTriggered = false;
    const onClick = () => {
      isClickTriggered = true;
    };
    rerender(<Progress value={25} onClick={onClick} />);

    // @ts-ignore
    fireEvent.click(progressNode);

    expect(isClickTriggered).toBe(true);

    // test attribute prop
    const role = 'button';
    rerender(<Progress value={25} role={role} />);

    // @ts-ignore
    expect(progressNode.getAttribute('role')).toBe(role);
  });
});
