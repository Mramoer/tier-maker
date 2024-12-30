import './App.css'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
import Layout from './client/components/Layout';

function App() {
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

  // const fetchTodos =  (): Promise<Todo[]> => {
  //   const data = fetch('/try').then(res => res.json())
  //   console.log(data)
  //   return data
  // }

  // const {isPending, error, data} = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: fetchTodos,
  //   initialData: [{description: 'hubkle guble', name: 'hello gauy'}]
  // })

  // if (isPending) return 'Loading...';

  // if (error) return 'an error occured' + error.messages

  return (
    <div className='wrapper'>
      <Layout/>
      {/* <button onClick={() => jwtMutation.mutate()}>Content</button> */}
      {document.cookie.includes('authToken') ? <p>Content</p> : <p>You should register first</p>}
    </div>
  )
}

export default App
