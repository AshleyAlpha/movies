import React, { useEffect } from 'react'
import axios from 'axios'
const Fetch = () => {
    const[response, setResponse] = useEffect([]);
    const handleFetch=async()=>{
        axios({
            method: "GET", 
            URL:"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            headers:{
                accept:"application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRjYTljMDU1MGVlYTQ3Y2U3ZTZiMWI3ZTgxMGZmYSIsInN1YiI6IjY2MzhkOWZhOTU5MGUzMDEyNmJkNzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1y9XG29cLlHADz6VA0aZJR8oOsf_DLHjflXMJySnCgA'
            },
        }).then{(response)=>{
            console.log(response.data.results);
            setResponse(response.data.results);
        }}
    };
    
  return (
    <div>
<img src=""></>
    </div>
  )
}

export default Fetch



