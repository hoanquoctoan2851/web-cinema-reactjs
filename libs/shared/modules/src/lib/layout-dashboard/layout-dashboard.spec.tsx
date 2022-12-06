import { render } from '@testing-library/react';
import LayoutDashboard from './layout-dashboard';
describe('LayoutDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutDashboard children />);
    expect(baseElement).toBeTruthy();
  })
})
