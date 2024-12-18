
import axios from 'axios';
import React, { useDeferredValue, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState();
  // we add three states for the form submission

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState();

  // a fuction to handle form submit 
  const handleSubmit = async(e) =>{
    e.preventDefault()

    // we are going to use multipart form data 
    // formdata is an inbult JS  object used to construct a set of key value pairs 
    // we append the values to the object 
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("phone", phone)
    formdata.append("password", password)
    // console.log("formdata", formdata)
    try {
      // if data is loading 
      setLoading(true)
      const response = await axios.post("https://malombe.pythonanywhere.com/api/signup",formdata)
      // we check for 200 status code 
      // ==== must equit value and datatype
      if(response?.status=== 200){
        setLoading(false)
        // console.log(response.data)
        setSuccess(response?.data?.message)

        // you need to reset the form fields to be empty
      }
      
    } catch (error) {
      setLoading(false)
      setError(error?.message)
      
    }

  }
    return ( 
        <div className="App">
            <h1>Sign Up</h1>
            {loading && <p className='text-warning'>Loading....please wait..</p>}
            {error && <p className="alert alert-danger">{error}</p>}
            {success && <p className='alert alert-success'>{success}</p>}

          <div className="card shadow p-5 row justify-content-center">
             <form action=""onSubmit={handleSubmit}>
              <input type="text" className="form-control" placeholder="Enter UserName" 
              onChange={(e)=>setUsername(e.target.value)} value={username}/> <br />
              <input type="email" className="form-control" placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)} value={email} /><br />
              <input type="tel" className="form-control" placeholder="Enter your Phone No." 
              onChange={(e)=>setPhone(e.target.value)} value={phone}/><br />
              <input type="password" className="form-control" placeholder="Enter your Password"
              onChange={(e)=>setPassword(e.target.value)} value={password} /> <br />
              <button type="submit" className="btn btn-info">Sign Up</button>
             </form>
             {/* add a link to go to sign in  */}

            <Link to="/signin">Already have an acount?, Sign In</Link>
          </div>
        </div>
     );
}
 
export default SignUp;