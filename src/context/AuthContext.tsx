import { createContext, PropsWithChildren, useState } from "react"

export interface AuthContextProps {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  showLoginPage: boolean
  setShowLoginPage: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext: React.Context<AuthContextProps> = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => undefined,
  showLoginPage: false,
  setShowLoginPage: () => undefined
})

const AuthContextProvider = ({children}:PropsWithChildren<Record<string,unknown>>) => {
  const [isAuth, setIsAuth] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      showLoginPage,
      setShowLoginPage
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider