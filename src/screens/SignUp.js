import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""});
const navigate = useNavigate();


const handleSubmit = async(e) =>{

    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/createuser",{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            Name:credentials.name,
            Email:credentials.email,
            Password:credentials.password,
            Location:credentials.geolocation
        })
    })
    const json = await response.json()
    
    if(json.success){
        navigate('/');
    }
    else if(!json.success){
        alert("Enter valid Credentials!");
    }
    
}

const onchange = (event) =>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}


  return (
<>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="text" className="form-control" name='email' value={credentials.email} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" autoComplete="on" className="form-control" name='password' value={credentials.password} onChange={onchange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onchange}/>
        </div>

        <button type="submit" className="m-3 btn btn-primary">Submit</button>
        <Link to="/login" className="m-3 btn btn-primary">Already a User!</Link>
      </form>
    </div>
</>
  )
}

