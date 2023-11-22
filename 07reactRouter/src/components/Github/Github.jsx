import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://api.github.com/users/sagarjha392")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);


  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="github_profile" width={300} />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async()=>{
    const response =await fetch('http://api.github.com/users/sagarjha392');
    return response.json();
}