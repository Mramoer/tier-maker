// import { useMutation, useQueryClient } from '@tanstack/react-query'
import Layout from '../components/widgets/Layout/Layout';
import style from './App.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect((function () {
    if (document.cookie.includes('authToken')) {
      navigate('/homepage')
    }
    else {
      navigate('/')
    }
  }), [navigate])
  


  // const queryClient = useQueryClient();

  // const jwtMutation = useMutation({
  //   mutationFn: async() => {
  //     const getToken = () => {
  //       const cookie = document.cookie.split('; ').find(c => c.startsWith('authToken='));
  //       return cookie ? cookie.split('=')[1] : null; 
  //     }
  //     const token = getToken();
  //     if (!token) {
  //       throw new Error('no token provided');
  //     }

  //     fetch('/try/content', {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //   }
  // })



  // if (isPending) return 'Loading...';

  // if (error) return 'an error occured' + error.messages

  return (
    <div className={style.wrapper}>
      <Layout/>
      <div> 
        <h1>Create your first tierlist now!</h1>
        <p>To start making your own tierlists you should <span 
        onClick={() => {navigate('/login')}} className={style.signin}>
          log in
        </span> first</p>
      </div>
    </div>
  )
}

export default App
