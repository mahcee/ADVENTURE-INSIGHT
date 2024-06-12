function AllBlogs(){
    return(
    <div>
        <div className="flex flex-col justify-center gap-5 my-5">
        <p className="text-center text-[2em]">
           BLOGS AND ABOUT
        </p>
        <input
          type="text"
          placeholder="Search Desired Place"
          className="py-4 text-[20px] px-[7rem] border block mx-auto outline-none text-black rounded-full"
          
 
        />
      </div>
      <div className="flex justify-between flex-wrap">
      <div className="flex mx-[4rem] my-[2rem]">
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400"></div>
            </div>
            <div className="flex mx-[4rem] my-[2rem]">
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400"></div>
            </div>
            <div className="flex mx-[4rem] my-[2rem]">
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400"></div>
            </div>
            <div className="flex mx-[4rem] my-[2rem]">
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400"></div>
            </div>
      </div>
    </div>
    )
}
export default AllBlogs;                