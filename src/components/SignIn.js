
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [email, setsmail] = useState(null);
    const [password, setPassword] = useState(null);

    // define threee states for postinf data 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // you need to invoke the useNavigate?
    const navigate  = useNavigate()

    // fuction to handle onSubmit/form submit
    const handleSubmit = async(e)=>{
        e.preventDefault()
        // we need a formdata
        const formdata = new FormData()
        formdata.append("email", email)
        formdata.append("password", password)


        try {
            setLoading(true)
            const response = await axios.post("http://malombe.pythonanywhere.com/api/signin", formdata)
            if(response?.status=== 200 && response?.data?.user){
                // we save user to a local storage 
                // we redirect usser to dasboard 
                setLoading(false)
                navigate("/")
            }else{
                setLoading(false)
                setError("Login Failed")
            }
            
        } catch (error) {
            setLoading(false)
            setError(error?.message)
            
        }

    }

    

    return ( 
        <div className="App">
            <br />
            <h2>Welcome to Sign In page</h2>
            {error && <p className='alert alert-danger'>{error}</p>}
            {loading && <p>Loading..pleae wait..</p>}
            {success && <p>{success}</p>}
               <div className="flex">
                <div className="card shadow p-5">
                    <form action="" onSubmit={handleSubmit}>
                     <input type="email" className="form-control" placeholder="Enter ypur email"
                     value={email} onChange={(e)=>setsmail(e.target.value)} /> <br />
                     <input type="password" className="form-control"  placeholder="Enter your Password"
                     value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />

                     <button type="submit" className="btn btn-warning "> Sign in</button> <br />
                    </form>

                    {/* a link to go to sign up  */}
                    <Link to="/signup">Dont have an account? sign up</Link>
                    {/* {email} <br />
                    {password} */}
                </div>
               </div>
        </div>
     );
}
 
export default SignIn;