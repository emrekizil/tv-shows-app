import ourSVG from "../icons/our.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="flex justify-center">
         <Link to={"/"} className="flex items-center">
         <img className="h-14 w-14 inline" src={ourSVG} alt="" />
         <h1 className="inline-block ml-3 py-4 text-2xl font-bold">Tv Shows App</h1>
         </Link>
        </div>
     );
}
 
export default Navbar;
