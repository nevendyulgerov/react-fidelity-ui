import * as React from 'react';
import { render } from '@testing-library/react';
import Grid from '../../../components/Grid/Grid';

describe('Components / Grid', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Grid>Grid</Grid>);
    expect(baseElement).toMatchSnapshot();
  });
});
