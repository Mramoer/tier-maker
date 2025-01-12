import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import User from "../../../database/models/userSchema"
import './Form.module.scss'
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

    const showUser = (user: User) => {
      console.log(JSON.stringify(user))
    }
    
    return (
        <div>
          <Link to="/">Back</Link>
          <form action="" name='auth'>
              <input type="text" value={logEmail} placeholder="John.doe@gmail.com" onChange={(e) => {setLogEmail(e.target.value)}}/>
              <input type="text" value={logPassword} placeholder="**********" onChange={(e) => {setLogPassword(e.target.value)}} />
              <button type="submit" onClick={(e) => {e.preventDefault(); loginMutation.mutateAsync({email: logEmail, password: logPassword})}}>Continue</button>
              <button onClick={() => {showUser({email:logEmail, password:logPassword})}}>click</button>
          </form>
        </div>
    )
}