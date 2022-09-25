import our404 from "../icons/404.svg"
import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="grid grid-cols-1 justify-items-center">
            <img className="h-auto w-2/4" src={our404} alt="" />
            <Link to="/" className="bg-black rounded-md h-8 p-1 mt-1 sm:col-span-3 text-center text-f2">Go Home Page</Link>
        </div>
     );
}
 
export default NotFound;