import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AllAgencies() {
  const [searchText, setSearchText] = useState("");
  const [agencies, setAgencies] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    (async () => {
      const url =
        "";
      const response = await fetch(url);
      const data = await response.json();
      setAgencies(data);
      console.log(data);
    })();
  }, []);
function handleSingleAgency(id, agencyName, email, password, webAddress, destinationsOfferred){
  navigate(`/allagencies/${id}`, {state:{agencyName, email, password, webAddress, destinationsOfferred, }})
}

  return (
    <div>
      <div className="flex flex-col justify-center gap-5 my-5">
        <p className="text-center text-[2em]">All Agencies </p>
        <input
          type="text"
          placeholder="Search Agency"
          className="py-4 text-[20px] px-[7rem] border block mx-auto outline-none text-black rounded-full"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex mx-[4rem] my-[2rem] flex-wrap justify-between gap-[2rem]">
          {agencies &&
            agencies.map((agencies) => {
              const {agencyName, email, password, webAddress, destinationsOfferred} = agencies
              return (
                <div className="w-[300px] h-[350px] rounded-lg shadow-xl shadow-slate-400">
               
                  <div className="flex flex-wrap flex-col items-center">
                    <p className="text-[20px] font-medium">{agencies.agencyName} </p>
                    <p className="text-[20px] font-medium">{agencies.email}</p>
                    <p className="text-[20px] font-medium"> {agencies.webAddress}</p>
                    <p className="text-[20px] font-medium">{agencies.destinationsOfferred}</p>
                      <button className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] rounded-md border py-2 px-3" onClick={()=>handleSingleAgency(agencies._id, agencyName, email, password, webAddress, destinationsOfferred)}>
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
export default AllAgencies;
