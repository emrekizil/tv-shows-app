import { Link } from "react-router-dom";

const Results = ({data,setData}) => {
    
    return (  
        <div className="shows  grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map((shows)=>(
                <div className="bg-f1 py-6 px-4 drop-shadow-sm hover:bg-f4 rounded-lg inline-block transform transition hover:-translate-y-4 " key={shows.show.id}>
                    <div className="flex justify-center">
                    {shows.show.image && <img src={shows.show.image.medium} className="mb-5" alt="" />}
                    </div>
                    <div className="min-h-18 h-24">
                    <h2 className="mb-5 text-f2">{shows.show.name}</h2>
                    </div>
                    
                    <Link to={`/shows/${shows.show.id}`} className="hover:bg-opacity-90 transition rounded-lg px-8 py-4  bg-f3 text-f2">Learn More</Link>
                </div>
            ))}
        </div>
    );
}
 
export default Results;