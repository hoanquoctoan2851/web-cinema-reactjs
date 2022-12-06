import { render } from '@testing-library/react';

import SharedHooks from './shared-hooks';

describe('SharedHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedHooks />);
    expect(baseElement).toBeTruthy();
  });
});
