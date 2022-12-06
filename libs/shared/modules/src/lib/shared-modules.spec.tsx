import { render } from '@testing-library/react';

import SharedModules from './shared-modules';

describe('SharedModules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedModules />);
    expect(baseElement).toBeTruthy();
  });
});
