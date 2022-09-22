import ourSVG from "../icons/our.svg"

const Navbar = () => {
    return ( 
        <div className="flex justify-center">
         <img className="h-14 w-14 inline " src={ourSVG} alt="" />
         <h1 className="inline-block ml-3 py-4 text-2xl">Tv Shows App</h1>
        </div>
     );
}
 
export default Navbar;
