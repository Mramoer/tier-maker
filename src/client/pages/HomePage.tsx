import { useQuery } from "@tanstack/react-query"
import Tier from "../../database/models/tieritems"
import Menu from "../components/widgets/Menu"

const HomePage = () => {

    const fetchTiers = async (): Promise<Tier[]> => {
       return await fetch('http://localhost:3000/content/todos').then((res) => res.json())
    }
    
    const {data} = useQuery<Tier[]>({
        queryKey: ['repoData'],
        queryFn: fetchTiers,
    })

  return (
    <div>
    	<Menu/>
    		<div>HomePage</div>
    		{data?.map((tier) => {
        	return (
        	<div key={tier._id?.toString()}>
          <h3>{tier?.name}</h3>
          <h4>{tier?.description}</h4>
        	</div>
        	)
    		})}
    </div>
  )
}

export default HomePage