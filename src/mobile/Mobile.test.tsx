import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Mobile from './Mobile';
import { DEVICE } from '../hooks/useDevice';
describe('Mobile', () => {
  test('test: PORTRAIT', () => {
    render(<Mobile orientation={DEVICE.PORTRAIT}/>);
    expect(screen.getByText('PORTRAIT')).toBeDefined()
  })
  test('test: PORTRAIT', () => {
    render(<Mobile orientation={DEVICE.LANDSCAPE}/>);
    expect(screen.queryByText('PORTRAIT')).toBeNull()
  })
})