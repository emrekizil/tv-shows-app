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
        <div className="">
          <div className="mx-auto inline-block">
          <input type="text" className="border-black mb-4" value={show} onChange={(e)=>{
            setShow(e.target.value)
          }}/>
          </div>
          <div className="mb-4 space-x-10 inline-block">
          <button className="px-6 py-3" onClick={formSubmit}>Search</button>     
          <button className="px-6 py-3" onClick={clearShows}>Clear</button>
          </div>
        </div>
      </form>
      
      {data.length ? <Results data={data} setData={setData}/>:<h2>{status}</h2> }
    </div>
  );
};

export default Form;
