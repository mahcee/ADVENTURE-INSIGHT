import { useState, useEffect } from "react";

function AllCompanies(){
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const url =
      "https://adventure-insights-backend.onrender.com/api/company" 
           const response = await fetch(url);

      const data = await response.json();

      console.log(data);
      setCompanies(data);
    }
    fetchCompanies();
  }, []);
    return(
        <>
          {
        companies&&companies.length===0?
        (

      <div className="flex justify-center items-center flex-col">
        <h3 className="text-2xl">No company found</h3>
        {console.log(companies && companies)}
        <button className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4">
          Add a Company
        </button>
      </div>
        ):(
            
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-wrap  gap-5 justify-center mx-[4rem] my-[2rem]">

            {
                companies&&companies.map(company=>{
                    return(
                        <div className="w-[300px] rounded-lg shadow-xl shadow-slate-400">
                        <div className="flex justify-center items-center gap-4 flex-col">
                          {/* <img
                            src="src/assets/article.jpeg"
                            className="rounded-lg w-11/12"
                          /> */}
                          <h2 className="text-2xl text-center">{company.name}</h2>
                          <h2 className="text-2xl text-center">{company.description}</h2>
                          <h2 className="text-2xl text-center">{company.location}</h2>

                        </div>
                        <div className="flex justify-center items-center ">
                          <button className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3.5em] rounded-lg outline-none my-4">
                            Edit
                          </button>{" "}
                          <button className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4">
                            Delete{" "}
                          </button>
                        </div>
                      </div>
            
                    )
                })
            }

       
        </div>
      </div>
        )
    } 
  </>
    )
}
export default AllCompanies;