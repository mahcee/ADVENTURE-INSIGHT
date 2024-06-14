import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RecentBlogs(){
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
    return(
        <div>
            <h1 className="text-[2rem] text-center underline underline-offset-1">RECENT BLOGS</h1>
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
    )
}
export default RecentBlogs