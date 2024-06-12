import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav className="sticky inset-0 z-30 w-full bg-[linear-gradient(90deg,#004aad,#5de0e6)]">
      <div className="flex items-center gap-[9rem] ">
        <div>
          <img src="src/assets/images/logo-removebg-preview.png" className="w-[250px]"/>
        </div>
        <div className="text-white">
          <ul className="flex justify-center text-lg gap-[4rem]">
            <Link to="/"><li>Home</li></Link>
            <Link to="/allblogs"><li>All Blogs</li></Link>
           <Link to="/signup"><li>Post a Blog</li></Link>
            <Link to="/signup"> <li>Add a Travel Agency</li></Link>
            <li>All Travel agency</li>
          </ul>
        </div>
          <div>
            <Link to="/"><button className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] rounded-lg border py-2 px-3 border-white">Log-out</button></Link>
            </div>
      </div>
    </nav>
  );
}
export default Nav;
