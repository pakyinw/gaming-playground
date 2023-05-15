import { describe, test, expect, vi } from "vitest";
import { isDesktop } from "./device";

vi.mock('ua-parser-js', () => {
  return vi.fn().mockImplementation(() => {
    return {getDevice: vi.fn()
      .mockImplementationOnce(()=>{
        return{
          type: 'tablet'
        }
      })};
  });
});

describe('useDevice',()=>{
  test('ua is tablet',async()=>{
    expect(isDesktop).toBe(false)
  })
})