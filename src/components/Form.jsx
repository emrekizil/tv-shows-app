import { useState } from "react";
import Results from "./Results";

const Form = () => {
  const [show,setShow]=useState("")
  const [data,setData]=useState([])
  const [status,setStatus]=useState("Lets search some show")
  const formSubmit=(e)=>{
    e.preventDefault()
    requestShows(show)
  }
  const requestShows= async(show) => {
    const res= await fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    const json=await res.json();
    setData(json)
    setStatus("We did not find anything")
  }
  const clearShows= () => {
    setData([])
    setShow("")
    setStatus("Lets search some show")
  }
  return (
    <div className="max-w-3xl mx-auto form text-center bg-f1">
      <form action="" onSubmit={formSubmit} className="">
        <div className="flex justify-around">
          <div className=""></div>
          <div className="">
          <input type="text" className="rounded-md w-48 border-black mb-4 mt-3 mr-3" value={show} onChange={(e)=>{
            setShow(e.target.value)
          }}/>
          </div>
          <div className="mb-4 space-x-5">
          <button className="px-6 py-3 text-f2" onClick={formSubmit}>Search</button>     
          <button className="px-6 py-3 text-f2" onClick={clearShows}>Clear</button>
          </div>
        </div>
      </form>
      
      {data.length ? <Results data={data} setData={setData}/>:<h2 className="text-f2">{status}</h2> }
    </div>
  );
};

export default Form;
