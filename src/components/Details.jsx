import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";



const Details = () => {
    const [detailShow,setDetailShow]=useState({})
    
    const {id}=useParams();
    const requestShows= async () => {
        const res= await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=cast`)
        const json= await res.json()
        if(!json.genres.length){
           json.genres[0]="Not in any genre"
        }
        if(!json.genres.length){
            json.genres[0]="Not in any genre"
         }
         if(json.rating.average==null){
            json.rating.average="Not Rated"
         }
        setDetailShow(json)
       
        
    }
    useEffect(()=>{
        requestShows();
    },[])
    return (
    <div className="card">
     <h2>{detailShow.name}</h2>
     <h2>{detailShow.language}</h2>
     <img src={detailShow.image ? detailShow.image.medium : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F02%2F10%2F21%2F59%2Flandscape-1192669__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Ftr%2Fimages%2Fsearch%2Fmanzaralar%2F&tbnid=pAfbEl0kgZmiqM&vet=12ahUKEwjD9MSa-Yr6AhXOz7sIHQmWBxwQMygAegUIARC2AQ..i&docid=UuYij3-HF6YZSM&w=855&h=480&q=manzara%20resim&ved=2ahUKEwjD9MSa-Yr6AhXOz7sIHQmWBxwQMygAegUIARC2AQ"} alt="" />
     <p>Show Type:{detailShow.type}</p>
     <p>Premiered Time:{detailShow.premiered}</p>
     <p>Ended Time:{detailShow.ended ? detailShow.ended : "Continuing"}</p>
     <p>Rating <strong>{detailShow.rating ? detailShow.rating.average:"Not Rated"}</strong></p>
     <p>Genre:{detailShow.genres ? detailShow.genres[0] : "Not in any genre"}</p>
     <Link to="/">Go</Link>
    </div>
    );
}
 
export default Details;