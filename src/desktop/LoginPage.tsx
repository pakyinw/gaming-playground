import { useState, useEffect, useContext } from 'react'
import useLogin from "../hooks/useLogin"
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from './DesktopRoutes'
import { AuthContext } from '../context/AuthContext'

function LoginPage(){
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  const nav  = useNavigate()
  const { login, isSubmitting } = useLogin()
  const { isAuth } = useContext(AuthContext)

  useEffect(()=>{
    isAuth && nav(ROUTE_PATHS.LOBBY)
  },[isAuth,nav])

  return(
    <div>
      <form>
        Account: <input type='text' onChange={e=>setAccount(e.target.value)}/>
        Password: <input type='password'  onChange={e=>setPassword(e.target.value)}/>
        <input 
          type='submit' 
          disabled={isSubmitting}
          onClick={(e: React.SyntheticEvent)=>{
            e.preventDefault()
            login(account, password)
          }}/>
      </form>
    </div>
  )
}

export default LoginPage