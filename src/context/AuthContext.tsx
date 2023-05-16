import { createContext, PropsWithChildren, useState } from "react"

export interface AuthContextProps {
  isAuth : boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext: React.Context<AuthContextProps> = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => undefined
})

const AuthContextProvider = ({children}:PropsWithChildren<Record<string,unknown>>) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider