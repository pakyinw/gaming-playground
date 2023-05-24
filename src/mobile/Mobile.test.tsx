import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Mobile from './Mobile';

vi.mock('./MobileRoutes', () => ({
  default: () => (<div>MobileRoutes</div>),
}));


describe('Mobile', () => {
  test('test: MobileRoutes', () => {
    render(<Mobile/>);
    expect(screen.getByText('MobileRoutes')).toBeDefined()
  })
})