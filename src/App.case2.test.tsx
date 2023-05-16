import { describe,test,vi, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import App from "./App";

vi.mock('./utils/device.ts', () => {
  return {
    isDesktop: false
  }}
)

vi.mock('./desktop/Desktop', () => ({
  default: () => (<div>Desktop</div>),
}));

vi.mock('./mobile/Mobile', () => ({
  default: () => (<div>Mobile</div>),
}));
  
describe('App Test',()=>{
  test('Desktop Display',()=>{
    render(<App></App>)
    expect(screen.getByText('Mobile')).toBeDefined()
    expect(()=>screen.getByText('Desktop')).toThrow()
  })
})