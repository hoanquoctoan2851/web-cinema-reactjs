import { render } from '@testing-library/react';

import MenuMobile from './menu-mobile';

describe('MenuMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMobile />);
    expect(baseElement).toBeTruthy();
  });
});
