import * as React from 'react';
import { render } from '@testing-library/react';
import Col from '../../../components/Grid/Col';

describe('Components / Grid / Col', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Col>Col</Col>);
    expect(baseElement).toMatchSnapshot();
  });
});
