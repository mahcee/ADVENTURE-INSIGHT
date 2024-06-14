import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AdventureContext } from "../context/state";
function Nav() {
  const { currentUser, setCurrentUser } = useContext(AdventureContext);
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }
  return (
    <nav className="sticky inset-0 z-30 w-full bg-[linear-gradient(90deg,#004aad,#5de0e6)]">
      <div className="flex items-center gap-[9rem] ">
        <div>
          <img
            src="src/assets/images/logo-removebg-preview.png"
            className="w-[250px]"
          />
        </div>
        <div className="text-white">
          <ul className="flex justify-center text-lg gap-[2rem]">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/allblogs">
              <li>All Blogs</li>
            </Link>

            <Link to="/postblog">
              <li>Post a Blog</li>
            </Link>
            <Link to="/travels">
              {" "}
              <li>Add a Travel Agency</li>
            </Link>
            <Link to="/allagencies">
              <li>All Travel agency</li>
            </Link>
            {currentUser ? (
              <div className="flex gap-[2rem]">
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>

                <button
                  className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] rounded-lg border py-2 px-3 border-white"
                  onClick={handleLogOut}
                >
                  Log-out
                </button>
              </div>
            ) : (
              <div className="flex gap-[2rem]">
                <Link to="/signup">
                  <li>Sign Up</li>
                </Link>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </div>
            )}
          </ul>
        </div>
        {console.log(currentUser)}
        <div></div>
      </div>
    </nav>
  );
}
export default Nav;
