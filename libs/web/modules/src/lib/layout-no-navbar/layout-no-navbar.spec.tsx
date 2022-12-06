import { render } from '@testing-library/react';

import LayoutNoNavbar from './layout-no-navbar';

describe('LayoutNoNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutNoNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
