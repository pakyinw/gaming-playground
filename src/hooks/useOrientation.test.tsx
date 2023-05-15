import { describe, test, expect, vi } from "vitest";
import { fireEvent, renderHook, waitFor } from "@testing-library/react";
import useOrientation, { ORIENTATION } from './useOrientation'


vi.stubGlobal('screen',{
  orientation: {
    type: 'portrait-primary'
  }
})


describe('useOrientation',()=>{
  test('ua is portrait-primary and fireEvent',async()=>{
    const { result  } = renderHook(() => useOrientation())
    fireEvent(window, new Event('orientationchange'))
    waitFor(()=>{
      expect(result.current.orientation).toBe(ORIENTATION.PORTRAIT)
    })
  })
})