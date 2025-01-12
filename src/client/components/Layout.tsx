import { Link } from "react-router-dom"
import './Layout.module.scss'

const Layout = () => {
  return (
    <div className='layout'>
        <Link to={'/login'}>Log in</Link>
        <Link to={'/reg'}>Create an account</Link>
    </div>
  )
}

export default Layout