import { useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';
import useLogin from "../../hooks/useLogin"

function UsernameLogin () {
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  const { login, isSubmitting } = useLogin()

  const form = useForm({
    
  })

  return (
    <form>
      <TextInput
        withAsterisk
        label="Account"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />
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
  )  
}
  
export default UsernameLogin