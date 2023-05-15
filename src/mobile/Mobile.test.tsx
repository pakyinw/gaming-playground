import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Mobile from './Mobile';
import { ORIENTATION } from '../hooks/useOrientation'

vi.mock('../hooks/useOrientation', async () => {
  const originalModule = await vi.importActual<typeof import('../hooks/useOrientation')>('../hooks/useOrientation');

  return{
    ...originalModule,
    default : vi.fn()
      .mockImplementationOnce(() => {
        return { orientation: ORIENTATION.PORTRAIT}
      })
      .mockImplementationOnce(() => {
        return { orientation: ORIENTATION.LANDSCAPE}
      })
      .mockImplementationOnce(() => {
        return { orientation: ORIENTATION.LANDSCAPE}
      })
  }
});

describe('Mobile', () => {
  test('test: Portrait', () => {
    render(<Mobile/>);
    expect(screen.getByText('Portrait')).toBeDefined()
  })
  test('test: non PORTRAIT', () => {
    render(<Mobile/>);
    expect(screen.queryByText('Landscape')).toBeDefined()
  })
  test('test: non PORTRAIT', () => {
    render(<Mobile/>);
    expect(screen.queryByText('Portrait')).toBeNull()
  })
})