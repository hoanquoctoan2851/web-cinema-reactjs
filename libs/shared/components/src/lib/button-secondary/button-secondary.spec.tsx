import { render } from '@testing-library/react';

import ButtonSecondary from './button-secondary';

describe('ButtonSecondary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonSecondary />);
    expect(baseElement).toBeTruthy();
  });
});
