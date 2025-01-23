import { useEffect, useState } from 'react'
import Tier from '../../../../database/models/tieritems';
import { Link, useNavigate } from 'react-router-dom';
import style from './Form.module.scss'

const TierForm = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const navigate = useNavigate()

	useEffect((function () {
			if (!document.cookie.includes('authToken')) {
			  navigate('/')
			}
		  }), [navigate])
	
	async function createTier(tier: Tier) {
		try {
			if (tier.description.length === 0 || tier.name.length === 0){
				console.log('invalid input value');
				return;
			}
			console.log(tier)
			const req = await fetch('http://localhost:3000/content/create', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(tier)
			})
			if (!req.ok) {
				console.log('Error occured while creating item')
			}
			setName('');
			setDescription('');
		} catch (error) {
			console.error(error)
		}
	}
	
  return (
    <div className={style.formBody}>
		<Link to="/homepage">Back</Link>
		 
      	<form onSubmit={(e) => {
          e.preventDefault();
          createTier({ name, description });
        }}
		>
			<input type="text" placeholder='name' 
				value={name} 
				onChange={(e) => setName(e.target.value)} 
			/>
			<input type="text" placeholder='description' 
				value={description} 
				onChange={(e) => {setDescription(e.target.value)}} 
			/>
			<button type='submit' className={style.confirmBtn}>Create</button>
      </form>
    </div>
  )
}

export default TierForm