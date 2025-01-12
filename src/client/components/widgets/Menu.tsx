import { Link, useNavigate } from 'react-router'

const Menu = () => {
       const navigate = useNavigate()

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
    <div>
        <button onClick={() => logout()}>Logout</button>
        <Link to="/create">Add an Item</Link>
        <button>Manage</button>
    </div>
  )
}

export default Menu