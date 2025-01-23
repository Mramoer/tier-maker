import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import style from './Menu.module.scss'

const Menu = () => {
    const navigate = useNavigate()

    useEffect((function () {
        if (!document.cookie.includes('authToken')) {
          navigate('/')
        }
      }), [navigate])

    const logout = async () => {
       const res = await fetch("user/logout", {
        method: "POST"
       });
       if (!res.ok) {
         console.log('error occured');
         return;
       }
       navigate('/')
    }

  return (
    <div className={style.layout}>
        <button onClick={() => logout()}>Logout</button>
        <Link to="/create">Add an Item</Link>
        <button>Manage</button>
    </div>
  )
}

export default Menu