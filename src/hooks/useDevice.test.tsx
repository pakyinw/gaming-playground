import { describe, test, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useDevice, { DEVICE } from './useDevice'

vi.mock('ua-parser-js', () => ({
  default: class UAParser{
    getDevice(){
      return {
        type: 'tablet'
      }
    }
  },
}));

vi.stubGlobal('screen',{
  orientation: ({
    type: DEVICE.PORTRAIT
  })
})

vi.useFakeTimers();

describe('useDevice',()=>{
  test('ua is tablet',async()=>{
    const { result  } = renderHook(() => useDevice())
    waitFor(()=>{
      expect(result.current.device).toBe(DEVICE.PORTRAIT)
    })
  })
})