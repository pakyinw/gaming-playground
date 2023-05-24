import { useContext } from 'react'
import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import AuthContextProvider, { AuthContext } from "./AuthContext";

const Gate = ()=>{
  const { isAuth } = useContext(AuthContext)
  return (
    <div>
      { isAuth? 'Opened' : 'Closed'}
    </div>
  )
}

const Button = ()=>{
  const { setIsAuth } = useContext(AuthContext)
  return (
    <div>
      <button onClick={()=>setIsAuth(true)}>Click Me</button>
    </div>
  )
}
  

describe('AuthContext Test',()=>{
  test('Interconnection between components',async ()=>{
    render(
      <AuthContextProvider>
        <Button/>
        <Gate/>
      </AuthContextProvider>
    )
    expect(screen.getByText('Closed')).toBeDefined()
    expect(
      ()=>screen.getByText('Opened')
    ).toThrow()
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    await userEvent.click(button)
    await waitFor(()=>{
      expect(screen.getByText('Opened')).toBeDefined()
    })
    expect(()=>screen.getByText('Closed')).toThrow()
  })
})