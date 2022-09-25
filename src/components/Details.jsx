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
        if(json.rating.average==null){
            json.rating.average="Not Rated"
        }   
        setDetailShow(json) 
    }
    useEffect(()=>{
        requestShows();
    },[])
    return (
    <div className="max-w-3xl mx-auto grid sm:grid-cols-3 grid-rows-2">  
        <div className="col-span-1 sm:col-span-1 grid  justify-items-center bg-f1 row-span-4 sm:row-auto ">
           <div className="text-center">
                <h2 className="bg-f2 my-3 px-8 h-fit rounded-lg">{detailShow.name}</h2>
                <img className="m-auto" src={detailShow.image ? detailShow.image.medium : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F02%2F10%2F21%2F59%2Flandscape-1192669__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Ftr%2Fimages%2Fsearch%2Fmanzaralar%2F&tbnid=pAfbEl0kgZmiqM&vet=12ahUKEwjD9MSa-Yr6AhXOz7sIHQmWBxwQMygAegUIARC2AQ..i&docid=UuYij3-HF6YZSM&w=855&h=480&q=manzara%20resim&ved=2ahUKEwjD9MSa-Yr6AhXOz7sIHQmWBxwQMygAegUIARC2AQ"}  alt="" />
                <div className="bg-f2 px-4 py-1 mt-2 mb-1 h-fit rounded-lg">
                <span className="mr-2 ">{detailShow.schedule ? detailShow.schedule.time : "No time included"}</span>
                {detailShow.schedule ? detailShow.schedule.days.map((x)=>(
                        <span key={x}>{x}</span>
                )):"Days is not included"}
                </div>
                <p className="bg-f2 mt-3 mb-1 px-8 h-fit rounded-lg">{detailShow.genres ? detailShow.genres[0] : "Not in any genre"}</p>
                <p className="bg-f2 my-3 px-8 h-fit rounded-lg"><strong>{detailShow.rating ? detailShow.rating.average:"Not Rated"}</strong></p>
            </div> 
        </div>
        <div className="col-span-1 sm:col-span-2  bg-f1">
            <div className="mt-11">
                <div className="sm:flex sm:justify-between px-5 mb-3">
                <h2 className="bg-f2 px-2 py-1 rounded-lg mb-2" >Language: {detailShow.language}</h2>
                <p className="bg-f2 px-2 py-1 rounded-lg mb-2">Show Type: {detailShow.type}</p>
                </div>
                <div className="sm:flex sm:justify-between px-5">
                <p className="bg-f2 px-2 py-1 rounded-lg  mb-2">Premiered Time: {detailShow.premiered?detailShow.premiered:"Not be indicated"}</p>
                <p className="bg-f2 px-2 py-1 rounded-lg mb-2">Ended Time: {detailShow.ended ? detailShow.ended : "Continuing"}</p>
                </div>
            </div>
             <h3 className="text-center text-f2 font-light mt-3">CAST</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 px-2 py-4">
            {detailShow._embedded? detailShow._embedded.cast.map((x)=>(
                <div className="text-center " key={x.character.id}>
                    <img className="h-auto w-full m-auto rounded-sm" src={x.person.image?x.person.image.medium:"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"} alt="" />
                    <span className="block border-b-[2px] border-f3 text-f2">{x.person.name}</span>
                    <span className="text-f2">{x.character.name}</span>
                </div>
            )):"No cast indicated"}
            </div>
        </div>
        <Link to="/" className="bg-black rounded-md h-8 p-1 mt-1 sm:col-span-3 text-center text-f2">Go Home Page</Link>
    </div>
    
    );
}
 
export default Details;