import { render } from '@testing-library/react';

import BoxApp from './box-app';

describe('BoxApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxApp />);
    expect(baseElement).toBeTruthy();
  });
});
