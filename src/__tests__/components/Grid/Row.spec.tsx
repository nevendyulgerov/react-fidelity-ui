import * as React from 'react';
import { render } from '@testing-library/react';
import Row from '../../../components/Grid/Row';

describe('Components / Grid / Row', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Row>Row</Row>);
    expect(baseElement).toMatchSnapshot();
  });
});
