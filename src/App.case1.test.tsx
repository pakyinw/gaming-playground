import { describe,test,vi, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import App from "./App.tsx";

vi.mock('./utils/device.ts', () => {
  return {
    isDesktop: true
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
    expect(screen.getByText('Desktop')).toBeDefined()
    expect(()=>screen.getByText('Mobile')).toThrow()
  })
})