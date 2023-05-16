import {describe, test, vi, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileRoutes from './MobileRoutes'

vi.mock('./LoginPage', () => ({
  default: () => (<div>LoginPage</div>),
}));

describe('MobileRouter', () => {
  test('test: badRoute', () => {
    const badRoute = '/badRoute'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <MobileRoutes/>
      </MemoryRouter>)
    expect(screen.getByText('LoginPage')).toBeDefined()
  })
})