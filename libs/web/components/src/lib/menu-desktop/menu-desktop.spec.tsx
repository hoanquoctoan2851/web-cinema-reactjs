import { render } from '@testing-library/react';

import MenuDesktop from './menu-desktop';

describe('MenuDesktop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuDesktop />);
    expect(baseElement).toBeTruthy();
  });
});
