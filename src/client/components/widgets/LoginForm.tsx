import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import User from "../../../database/models/userSchema"

export const LoginForm = () => {
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
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
      } catch (error) {
        console.error(error)
      }
    }
  })    
  return (
    <div>
          <form action="" name='login'>
              <input type="text" onChange={(e) => {setRegEmail(e.target.value)}}/>
              <input type="text" onChange={(e) => {setRegPassword(e.target.value)}}/>
              <button type="submit" onClick={() => registerMutation.mutateAsync({email: regEmail, password: regPassword}) }>register</button>
          </form>
    </div>
)
}
