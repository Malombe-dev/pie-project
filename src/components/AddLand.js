import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddLand = () => {

// define states 
const [landlocation, setLandlocation] = useState(null);
const [landcost, setLandcost] = useState(null);
const [landsize, setLandsize] = useState(null);
const [landowner, setLandowner] = useState(null);
const [plotno, setPlotno] = useState(null);
const [landdescription, setLanddescription] = useState(null);
const [landphoto, setLandphoto] = useState(null);


const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null); 


const navigate = useNavigate()

// handle form submission 
const handleSubmit = async(e)=>{
    e.preventDefault()
    // create a form data object 
    const formdata = new FormData()
    formdata.append("land_description",landdescription)
    formdata.append("land_location",landlocation)
    formdata.append("land_cost",landcost)
    formdata.append("land_size",landsize)
    formdata.append("land_owner",landowner)
    formdata.append("plot_no",plotno)
    formdata.append("land_photo",landphoto)


    try {
        setLoading(true)
        const  response = await axios.post("http://malombe.pythonanywhere.com/api/add_land", formdata)

        if (response?.status=== 200){
            setLoading(false)
            setSuccess(response?.data?.success)
            // redirect the user to get land 
            navigate("/")

        }
    } catch (error) {
        setLoading(false)
        setError(error?.message)
        
    }

}

    return (  
       <div className="App">    
       <h1 class="text-info">Add land Details</h1>
       {loading && <p className='text-warning'>Loading....please wait..</p>}
       {error && <p className="alert alert-danger">{error}</p>}
        {success && <p className='alert alert-success'>{success}</p>}

       <div className="card shadow p-5">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Land location"
            value={landlocation} onChange={(e)=>setLandlocation(e.target.value)}/><br />

            <input type="number" className="form-control"  placeholder="Land cost"
            value={landcost} onChange={(e)=>setLandcost(e.target.value)}/><br />

            <input type="text" className="form-control" placeholder="Land size"
            value={landsize} onChange={(e)=>setLandsize(e.target.value)}/><br />

            <input type="text" className="form-control" placeholder="Land Owner"
            value={landowner} onChange={(e)=>setLandowner(e.target.value)} /><br />

            <input type="number" className="form-control" placeholder="Plot No"
            value={plotno} onChange={(e)=>setPlotno(e.target.value)}/> <br />

            <textarea className="form-control" cols="30" rows="5" placeholder="Land Description"
            value={landdescription} onChange={(e)=>setLanddescription(e.target.value)}></textarea> <br />

            <fieldset className="text-start">Upload Land Photo</fieldset>
             <input type="file" className="form-control"
             accept='image/*'
             onChange={(e)=>{
                const file = e.target.files[0]
                // check if the file exist 
                if(file){
                    setLandphoto(file)
                }
                
             }} /><br />
             <button type="submit" className="btn btn-warning form-control">Add Land</button>



             {/* {landlocation} <br />
             {landcost} <br />
             {landsize} <br />
             {landowner} <br />
             {plotno} <br />
             {landdescription} */}
        </form>
       </div>
       </div>
    );
}
 
export default AddLand;