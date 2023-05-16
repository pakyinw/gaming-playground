import { createContext, PropsWithChildren, useState } from "react"

export interface AuthContextProps {
  isSignedIn : boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext: React.Context<AuthContextProps> = createContext<AuthContextProps>({
  isSignedIn: false,
  setIsSignedIn: () => undefined
})

const AuthContextProvider = ({children}:PropsWithChildren<Record<string,unknown>>) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <AuthContext.Provider value={{
      isSignedIn,
      setIsSignedIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider