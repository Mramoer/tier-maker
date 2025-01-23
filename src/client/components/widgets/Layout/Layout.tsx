import { Link } from "react-router-dom"
import style from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={style.layout}>
        <Link to={'/login'} className="Link">Log in</Link>
        <Link to={'/reg'}>Create an account</Link>
    </div>
  )
}

export default Layout