import { render } from '@testing-library/react';

import BackgroundGlobal from './background-global';

describe('BackgroundGlobal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundGlobal />);
    expect(baseElement).toBeTruthy();
  });
});
