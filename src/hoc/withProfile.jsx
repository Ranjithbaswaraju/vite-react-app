import { useEffect, useState } from "react";
import axios from 'axios'; // Missing axios import

const withProfile = (Component) => {
  return function WrappedComponent(props) { // Use a named function instead of an anonymous arrow function
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const { data, status } = await axios.get('https://dummyjson.com/users/1');
        if (status === 200) {
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    return <Component profile={profileData} {...props} />; // Spread props to pass down any other props
  };
};

export default withProfile;
