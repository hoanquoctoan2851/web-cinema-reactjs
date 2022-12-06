import { render } from '@testing-library/react';

import WebServices from './web-services';

describe('WebServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebServices />);
    expect(baseElement).toBeTruthy();
  });
});
