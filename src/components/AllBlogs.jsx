import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AllBlogs() {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    (async () => {
      const url =
        "https://adventure-insights-backend.onrender.com/api/articles";
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      console.log(data);
    })();
  }, []);
function handleSingleBlog(id, title, location, description, hotels, coverImg){
  navigate(`/blog/${id}`, {state:{title, location, description, hotels, coverImg}})
}

  return (
    <div>
      <div className="flex flex-col justify-center gap-5 my-5">
        <p className="text-center text-[2em]">BLOGS AND ABOUT</p>
        <input
          type="text"
          placeholder="Search Desired Place"
          className="py-4 text-[20px] px-[7rem] border block mx-auto outline-none text-black rounded-full"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex mx-[4rem] my-[2rem] flex-wrap justify-between gap-[2rem]">
          {blogs &&
            blogs.map((blog) => {
              const {title, location, description, hotels} = blog
              return (
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400">
                  <img
                    src={
                      blog.coverImg
                        ? blog.coverImg
                        : "src/assets/images/hero.jpg"
                    }
                    className="w-[300px] h-[150px]"
                  />
                  <div className="flex flex-wrap flex-col items-center">
                    <p className="text-[20px] font-medium">{blog.title} </p>
                    <p>{blog.location}</p>
                    
                      <button className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] rounded-md border py-2 px-3" onClick={()=>handleSingleBlog(blog._id, title, location, description, hotels)}>
                        Read More
                      </button>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default AllBlogs;
