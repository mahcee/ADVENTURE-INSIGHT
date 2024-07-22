// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";

// function TravelsContent(){

//     const [formData, setFormData] = useState({});
//     const navigate = useNavigate();
//     const [error, setError] = useState({});
//     const [errorMessage, setErrorMessage] = useState({});
//     const [loading, setLoading] = useState(false);
  
//     function handleChange(e) {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//     async function handleTravels(e) {
//       const errors = {};
//       if (!formData.agencyName || formData.agencyName === "") {
//         errors.agencyName = "Please enter your agencyName";
//       }
//       if (!formData.email || formData.email === "") {
//         errors.email = "Please enter your email";
//       }
//       if (!formData.password || formData.password === "") {
//         errors.password = "Please enter your password";
//       }
//       if (!formData.webAddress || formData.webAddress === "") {
//         errors.webAddress = "Please enter the webAddress";
//       }
//       if (!formData.destinationsOfferred || formData.destinationsOfferred === "") {
//         errors.destinationsOfferred = "Please enter the destinationsOfferred";
//       }
//       setError(errors);
//       if (!error === false) {
//         setLoading(true);
//         const url = "https://adventure-insights-backend.onrender.com/api/company";
     
//         const response = await fetch(url);
//         const data = await response.json().catch((err) => {
//           // console.log(err);
//           setLoading(false);
//         });
//         if (!response.ok) {
//           setErrorMessage(data.message);
//         } else {
//           navigate("/allagencies");
//         }
//         console.log(data);
//         console.log(error);
//       }
//     }
//     return(
//         <>

// <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('src/assets/bg-image.jpeg')] h-[100vh] bg-cover bg-no ">
               
//                <div className="flex justify-center items-center mt-9">
//                {/* {loading && <Loader />} */}

//       <div className="py-[7em] px-[7em] shadow-[0_0_5px_white] flex  flex-col items-center justify-between bg-white rounded-[20px]">
//         <div>
//           <h1 className="font-bold  text-3xl text-center mb-6">Add a Travel Agency</h1>
//         </div>
//         <div>
//           <div>
       
//           <p className="text-red-500 font-bold">
//               {error && error.agencyName && error.agencyName}
//             </p>
          
//             <input
//               type="text"
//               name="agencyName"
//               placeholder="agencyName"
//               className="border-2  outline-none border-solid border-[#5de0e6] py-[1em]  px-[3em]  rounded-lg my-4"
            
//               onChange={(e) => handleChange(e)}

//             />
//           </div>
       

//           <div>
//           <p className="text-red-500 font-bold">
//               {error && error.email && error.email}
//             </p>
          
          
//        <input
//          type="text"
//          name="email"
//          placeholder="Email"
//          className="border-2  outline-none border-solid border-[#5de0e6] py-[1em]  px-[3em]  rounded-lg my-4"
       
//          onChange={(e) => handleChange(e)}

//        />
//      </div>
//           <div>
           
//           <p className="text-red-500 font-bold">
//               {error && error.password && error.password}
//             </p>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
//               onChange={(e) => handleChange(e)}


//             />
//           </div>

//           <div>
           
//            <p className="text-red-500 font-bold">
//                {error && error.destinationsOfferred && error.destinationsOfferred}
//              </p>
//              <input
//                type="text"
//                name="destinationsOfferred"
//                placeholder="destinationsOfferred"
//                className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
//                onChange={(e) => handleChange(e)}
 
 
//              />
//            </div>
          
//           <div>
           
//           <p className="text-red-500 font-bold">
//               {error && error.webAddress && error.webAddress}
//             </p>
//             <input
//               type=" text"
//               name="webAddress"
//               placeholder="webAddress"             className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
//               onChange={(e) => handleChange(e)}


//             />
//           </div>
          
//         </div >
    
//         <button
//           className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4"
//           onClick={(e) => handleTravels(e)}

//         >
//           Add  a Travel Agency
//         </button>
        
//       </div>
//     </div>
//     </div>
//         </>
//     )
// }
// export default TravelsContent;





















import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function TravelsContent() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update formData state when an input field changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Validate the form and handle the API request
  async function handleTravels(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const errors = {};

    // Basic form validation
    if (!formData.agencyName || formData.agencyName.trim() === "") {
      errors.agencyName = "Please enter the agency name";
    }
    if (!formData.email || formData.email.trim() === "") {
      errors.email = "Please enter your email";
    }
    if (!formData.password || formData.password.trim() === "") {
      errors.password = "Please enter your password";
    }
    if (!formData.webAddress || formData.webAddress.trim() === "") {
      errors.webAddress = "Please enter the web address";
    }
    if (!formData.destinationsOfferred || formData.destinationsOfferred.trim() === "") {
      errors.destinationsOfferred = "Please enter the destinations offered";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) {
      return; // Stop the form submission if there are errors
    }

    setLoading(true);
    const url = "https://adventure-insights-backend.onrender.com/api/company";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      navigate("/allagencies");
    } catch (err) {
      setError({ apiError: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('src/assets/bg-image.jpeg')] h-[100vh] bg-cover bg-no">
      <div className="flex justify-center items-center mt-9">
        {loading && <Loader />}
        <div className="py-[7em] px-[7em] shadow-[0_0_5px_white] flex flex-col items-center justify-between bg-white rounded-[20px]">
          <div>
            <h1 className="font-bold text-3xl text-center mb-6">Add a Travel Agency</h1>
          </div>
          <form onSubmit={handleTravels} className="w-full max-w-md">
            <div>
              <p className="text-red-500 font-bold">{error.agencyName}</p>
              <input
                type="text"
                name="agencyName"
                placeholder="Agency Name"
                className="border-2 outline-none border-solid border-[#5de0e6] py-[1em] px-[3em] rounded-lg my-4"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-red-500 font-bold">{error.email}</p>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border-2 outline-none border-solid border-[#5de0e6] py-[1em] px-[3em] rounded-lg my-4"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-red-500 font-bold">{error.password}</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-2 border-solid border-[#5de0e6] py-[1em] px-[3em] rounded-lg outline-none my-4"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-red-500 font-bold">{error.destinationsOfferred}</p>
              <input
                type="text"
                name="destinationsOfferred"
                placeholder="Destinations Offered"
                className="border-2 border-solid border-[#5de0e6] py-[1em] px-[3em] rounded-lg outline-none my-4"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-red-500 font-bold">{error.webAddress}</p>
              <input
                type="text"
                name="webAddress"
                placeholder="Web Address"
                className="border-2 border-solid border-[#5de0e6] py-[1em] px-[3em] rounded-lg outline-none my-4"
                onChange={handleChange}
              />
            </div>
            <div className="text-red-500 font-bold">{error.apiError}</div>
            <button
              type="submit"
              className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border py-[1em] px-[3em] rounded-lg outline-none my-4"
            >
              Add a Travel Agency
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TravelsContent;
