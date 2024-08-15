import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setcredentials] = useState({email:"",password:""});
  let navigate = useNavigate();


const handleSubmit = async(e) =>{

    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/loginuser",{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            Email:credentials.email,
            Password:credentials.password
        })
    })
    const json = await response.json()
    
    if(!json.success){
        alert(json.errors);
    }
    else{
      localStorage.setItem("authToken", json.authToken);
      navigate('/')
    }
    
}

const onchange = (event) =>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
  <>
    <div className='mt-4' style={{'height':'100px'}}>
      <Link className='fs-1'
        style={{ color: "white", 'position': 'center', 'textDecoration':'none' }}
        to="/">
        Cravings
      </Link>
    </div>
    <div className='container '>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="text" className="form-control" name='email' value={credentials.email} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" autoComplete="on" className="form-control" name='password' value={credentials.password} onChange={onchange}/>
        </div>

        <button type="submit" className="m-3 btn btn-primary">Login</button>
        <Link to="/createuser" className="m-3 btn btn-primary">New here! Sign Up here</Link>
      </form>
    </div>
  </>
  )
}
