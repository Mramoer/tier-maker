import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import User from "../../../../database/models/userSchema"
import style from './Form.module.scss'
import { Link, useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')
    const navigate = useNavigate()

    const loginMutation = useMutation({
      mutationFn: async (user: User) => {
        try {
          const res = await fetch('user/auth', {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(user)
          })  
          setLogEmail(''); 
          setLogPassword(''); 
          if (res.status === 200) {
            navigate('/homepage');
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
    
    return (
        <div className={style.formBody}>
          <Link to="/">Back</Link>
          <h4>Log in your profile</h4>
          <form action="" name='auth'>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={logEmail} placeholder="John.doe@gmail.com" onChange={(e) => {setLogEmail(e.target.value)}}/>
              <input type="password" value={logPassword} placeholder="**********" onChange={(e) => {setLogPassword(e.target.value)}} />
              <button type="submit" className={style.confirmBtn} onClick={(e) => {e.preventDefault(); loginMutation.mutateAsync({email: logEmail, password: logPassword})}}>Continue</button>
          </form>
        </div>
    )
}