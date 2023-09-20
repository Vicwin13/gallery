import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";


export default function Gallery() {

    const [images, setImages] = useState(null);

useEffect(()=>{
    fetch('http://localhost:3000/images')
    .then((response) => {
        return response.json()
    }).then((data)=>{
        setImages(data);
    }).catch(err){
        console.log("Error getting images", err)
    }
},[])

  return (
    <>
    
    <Dashboard images= {images}/>

    </>
  );
}
