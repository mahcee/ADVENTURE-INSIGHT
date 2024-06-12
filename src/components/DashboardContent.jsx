import { useState } from "react";
import AllArticles from "./AllArticles";
import AllCompanies from "./AllCompanies";

function DashboardContent(){
const [selectedItem,setSelectedItem]=useState("my articles")
const [articles,setArticles]=useState()


function handleSelectedItem(e){
   
setSelectedItem(e.target.textContent.toLowerCase())

if  (articles===""){
const error="no article added"
const button=``
}
}
    return(
        <>
        <div className="flex gap-5 justify-center items-center">
        <button
          className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4"
          onClick={e=>handleSelectedItem(e)}
          style={{background: selectedItem==="my articles" && "#004aad" }}

        >
          My Articles
        </button>

        <button
          className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4"
          onClick={e=>handleSelectedItem(e)}
          style={{background: selectedItem==="my companies" && "#004aad" }}
        >
          My Companies
        </button>
        </div>
        <div>
{
    selectedItem==="my articles"?<AllArticles/>:<AllCompanies/>
}
        </div>
        </>
    )
}
export default DashboardContent;