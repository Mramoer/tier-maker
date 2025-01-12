// import { useMutation, useQueryClient } from '@tanstack/react-query'
import Layout from './client/components/Layout';
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
      <h1>hello</h1>
      <Layout/>
    </div>
  )
}

export default App
