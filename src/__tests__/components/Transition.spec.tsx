import * as React from 'react';
import { render } from '@testing-library/react';
import Transition from '../../components/Transition';

describe('Components / Transition', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Transition><span>Transition</span></Transition>);
    expect(baseElement).toMatchSnapshot();
  });
});
