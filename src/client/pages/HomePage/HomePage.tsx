import { useQuery } from "@tanstack/react-query"
import Tier from "../../../database/models/tieritems"
import style from "./HomePage.module.scss";
import Menu from "../../components/widgets/Menu/Menu";


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
        <div className={style.stack}>    
    		{data?.map((tier) => {
        	return (
        	    <div key={tier._id?.toString()} className={style.tierItem} >
                <h3>{tier?.name}</h3>
                <h4>{tier?.description}</h4>
        	    </div>
        	)
    		})}
        </div>
    </div>
  )
}

export default HomePage