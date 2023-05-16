import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import axios, {AxiosError, isAxiosError} from "axios"

const timeout = 10000

function useLogin () {
  const { setIsAuth } = useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function login(
    username: string, 
    password: string
  ){
    setIsSubmitting(true)
    setError('')

    axios(import.meta.env.VITE_LOGIN,{
      method: 'POST',
      timeout,
      auth:{
        username,
        password
      }
    }).then(result=>{
      // authenticated
      const token = result.data.token
      localStorage.setItem('token',token)
      setIsAuth(true)
    }).catch((err:unknown | AxiosError) =>{
      setError(isAxiosError(err)?err.message:'Unknown Error')
      setIsAuth(false)
    }).finally(()=>{
      setIsSubmitting(false)
    })
  }

  function logout(){
    // send request
    // clear cookies
    // setState
    setIsAuth(false)
  }

  return {
    login, logout, error, isSubmitting
  }
}

export default useLogin