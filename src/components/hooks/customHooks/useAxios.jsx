import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to fetch data from a given URL
const useAxios = (url = 'https://dummyjson.com/products') => {
    const [data, setData] = useState(null); // Initialize data as null
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch data asynchronously
        const dataFetch = async () => {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setData(response.data); // Set data if response is successful
                } 
            } catch (err) {
                setError(err); // Handle errors during fetch
            } finally {
                setLoading(false); // Set loading to false after fetch is complete
            }
        };

        dataFetch(); // Call the async function

    }, [url]); // Dependency array: re-fetch if URL changes

    return [data, error, loading]; // Return the fetched data, error, and loading state
};

export default useAxios;
