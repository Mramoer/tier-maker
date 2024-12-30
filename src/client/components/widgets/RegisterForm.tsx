import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import User from "../../../database/models/userSchema"

const RegisterForm = () => {
    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')

    const loginMutation = useMutation({
      mutationFn: async (user: User) => {
        try {
          await fetch('/user/auth', {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(user)
          })  
        } catch (error) {
          console.error(error)
        }
      }
    })
    
    return (
        <div>
          <form action="" name='auth'>
              <input type="text" onChange={(e) => {setLogEmail(e.target.value)}}/>
              <input type="text" onChange={(e) => {setLogPassword(e.target.value)}} />
              <button type="submit" onClick={() => loginMutation.mutateAsync({email: logEmail, password: logPassword})}>login</button>
          </form>
        </div>
    )
}

export default RegisterForm