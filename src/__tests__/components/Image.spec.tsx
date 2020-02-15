import * as React from 'react';
import { render } from '@testing-library/react';
import Image from '../../components/Image';

describe('Components / Image', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Image src="" />);
    expect(baseElement).toMatchSnapshot();
  });
});
