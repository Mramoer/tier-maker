import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {
  
  type Todo = {
    title: string,
    id: number,
    userId: number,
    completed: boolean
  }

  function fetchTodos(): Promise<Todo[]> {
    const data = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    return data
  }
 
  const {isPending, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchTodos,
  })

  if (isPending) return 'Loading...';

  if (error) return 'an error occured' + error.message

  return (
    <div>
      <h1>{data.map((item) => {
        return (
          <>
          <h1>{item.title}</h1>
          <h2>{item.userId}</h2>
          </>
        )
      })}</h1>
    </div>
  )
}

export default App
