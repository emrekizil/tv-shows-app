import { useState } from "react";
import Results from "./Results";

const Form = () => {
  const [show,setShow]=useState("")
  const [data,setData]=useState([])
  
  const [status,setStatus]=useState("Let's search show")
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
  }
  return (
    <div className="max-w-3xl mx-auto form text-center bg-f1">
      <form action="" onSubmit={formSubmit} className="">
        <div className="grid grid-rows-2 sm:flex sm:justify-center">
          <div className="sm:mr-10">
          <input type="text" placeholder="Show's Name" className="rounded-md w-48 border-black mb-4 mt-3" value={show} onChange={(e)=>{
            setShow(e.target.value)
          }}/>
          </div>
          <div className="mb-4 space-x-3 mt-1 sm:space-x-5">
          <button className="px-6 py-2 text-f2 rounded-xl bg-f3" onClick={formSubmit}>Search</button>     
          <button className="px-6 py-2 text-f2 rounded-xl bg-f3" onClick={clearShows}>Clear</button>
          </div>
        </div>
      </form>
      {data.length ? <Results data={data} setData={setData}/>:<h2 className="text-f2">{status}</h2> }
    </div>
  );
};

export default Form;
