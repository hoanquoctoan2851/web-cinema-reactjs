import { render } from '@testing-library/react';

import WebHooks from './web-hooks';

describe('WebHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebHooks />);
    expect(baseElement).toBeTruthy();
  });
});
