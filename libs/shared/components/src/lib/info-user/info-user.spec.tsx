import { render } from '@testing-library/react';

import InfoUser from './info-user';

describe('InfoUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoUser />);
    expect(baseElement).toBeTruthy();
  });
});
