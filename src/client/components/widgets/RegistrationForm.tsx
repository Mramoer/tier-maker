import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import User from "../../../database/models/userSchema"
import './Form.module.scss'
import { Link, useNavigate } from "react-router-dom"

export const RegistrationForm = () => {
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: async (user: User) => {
      try {
        await fetch('user/registration/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        })
        setRegEmail(''); 
        setRegPassword(''); 
        navigate('/');
      } catch (error) {
        console.error(error)
      }
    }
  })    
  return (
    <div id="wrappers">
      <Link to="/">Back</Link>
      <form action="" name='register'>
        <input type="text" value={regEmail} onChange={(e) => {setRegEmail(e.target.value)}}/>
        <input type="password" value={regPassword} onChange={(e) => {setRegPassword(e.target.value)}}/>
        <button type="submit" onClick={(e) => {e.preventDefault(); registerMutation.mutateAsync({email: regEmail, password: regPassword}); }}>Confirm</button>
        <button onClick={() => (fetch('/try/todos/'))}>get data</button>
      </form>
    </div>
  )
}
