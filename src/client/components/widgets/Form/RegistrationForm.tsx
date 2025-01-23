import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import User from "../../../../database/models/userSchema"
import style from './Form.module.scss'

export const RegistrationForm = () => {
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: async (user: User) => {
      try {
        await fetch('user/confirmation/', {
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
    <div className={style.formBody}>
        <Link to="/">Back</Link>
        <h4>Create new account</h4>
      <form action="" name='register'>
        <input type="text" placeholder="Email" value={regEmail} onChange={(e) => {setRegEmail(e.target.value)}}/>
        <input type="password" placeholder="**********" value={regPassword} onChange={(e) => {setRegPassword(e.target.value)}}/>
        <button type="submit" className={style.confirmBtn} onClick={(e) => {e.preventDefault();
           registerMutation.mutateAsync({email: regEmail, password: regPassword})}}>Confirm</button>
      </form>
    </div>
  )
}
