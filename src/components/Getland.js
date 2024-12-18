import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import axios from 'axios'; // Import axios for HTTP requests
import AddLand from './AddLand'; // Import the AddLand component (not used here, but included for future use)

// Define the Getland component
const Getland = () => {
    // State variables
    const [loading, setLoading] = useState(null); // Tracks the loading state during data fetching
    const [error, setError] = useState(null); // Tracks any error encountered during data fetching
    const [land, setLand] = useState([]); // Stores the fetched land data

    // Effect hook for fetching data on component mount
    useEffect(() => {
        try {
            setLoading(true); // Set loading to true before the request starts
            axios
                .get("https://malombe.pythonanywhere.com/api/get_land_details") // Make the API call
                .then((response) => {
                    // Handle the successful response
                    setLand(response?.data); // Update the land state with the fetched data
                    setLoading(false); // Set loading to false after the request completes
                });
        } catch (error) {
            setLoading(false); // Stop loading on error
            setError("Failed to fetch land data"); // Set an error message
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const imageUrl = "https://malombe.pythonanywhere.com/static/images/"; // Base URL for images

    // Return the JSX for rendering the component
    return (
        <div className="row"> 
            {/* Check if data is loading */}
            {loading && <p>Loading land data...</p>} 

            {/* Display an error message if an error occurs */}
            {error && <p className="text-danger">{error}</p>} 

            {/* Map through the first 8 land entries and display them */}
            {land?.slice(0, 8).map((singleland, index) => (
                <div key={index} className="col-md-3 p-5 bg-dark text-light">
                    <div className="card shadow p-2">
                        {/* Display the land image */}
                        <img 
                            src={imageUrl + singleland.land_photo} 
                            alt="Land" 
                            className="w-100" 
                            height="200" 
                        />

                        <div className="card-body">
                            {/* Display land details */}
                            <b className="text-danger">Plot Number: {singleland.plot_no}</b> <br />
                            <h2 className="display-6 text-warning">Location: {singleland.land_location}</h2>
                            <b className="text-primary">Size: {singleland.land_size}</b> <br />
                            <b className="text-danger">Owner: {singleland.land_owner}</b> <br />
                            <b className="text-dark">Description: {singleland.land_description}</b> <br />

                            {/* Placeholder Pay Now button */}
                            <button className="btn btn-warning mt-3">Pay Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Export the component for use in other files
export default Getland;
