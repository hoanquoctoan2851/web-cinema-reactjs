import { render } from '@testing-library/react';

import ButtonPrimary from './button-primary';

describe('ButtonPrimary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonPrimary />);
    expect(baseElement).toBeTruthy();
  });
});
