import { useState } from "react";


export function useFunctions () {

  
  const [userDetails, setUserDetails] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = () => {
    console.log(userDetails);
  };

  return ({handleChange, handleSubmit })
};
