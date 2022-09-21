import { Link } from "react-router-dom";

const Results = ({data,setData}) => {
    
    return (  
        <div className="shows grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {data.map((shows)=>(
                <div className="bg-f1 py-2 px-4 drop-shadow-sm hover:bg-f4  inline-block transform transition hover:-translate-y-4 " key={shows.show.id}>
                    <div className="flex justify-center">
                    {shows.show.image && <img src={shows.show.image.medium} className="mb-5" alt="" />}
                    </div>
                    <h2 className="mb-2 h-9 ">{shows.show.name}</h2>
                    <Link to={`/shows/${shows.show.id}`} className="px-8 py-4">Learn More</Link>
                </div>
            ))}
        </div>
    );
}
 
export default Results;