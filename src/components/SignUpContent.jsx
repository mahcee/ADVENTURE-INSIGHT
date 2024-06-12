import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function SignUpContent(){

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const [loading, setLoading] = useState(false);
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function handleSignUp(e) {
      const errors = {};
      if (!formData.name || formData.name === "") {
        errors.name = "Please enter your name";
      }
      if (!formData.email || formData.email === "") {
        errors.email = "Please enter your email";
      }
      if (!formData.password || formData.password === "") {
        errors.password = "Please enter your password";
      }
      if (!formData.confirmPassword || formData.confirmPassword === "") {
        errors.confirmPassword = "Please confirm your password";
      }
      setError(errors);
      if (!error === false) {
        setLoading(true);
        const url = "http://localhost:5000/api/auth/signup";
        const options = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        };
        const response = await fetch(url, options);
        const data = await response.json().catch((err) => {
          console.log(err);
          setLoading(false);
        });
        if (!response.ok) {
          setErrorMessage(data.message);
        } else {
          navigate("/login");
        }
        console.log(data);
        console.log(error);
      }
    }
    return(
        <>

<div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('src/assets/bg-image.jpeg')] h-[100vh] bg-cover bg-no ">
               
               <div className="flex justify-center items-center mt-9">
               {/* {loading && <Loader />} */}

      <div className="py-[7em] px-[7em] shadow-[0_0_5px_white] flex  flex-col items-center justify-between bg-white rounded-[20px]">
        <div>
          <h1 className="font-bold  text-3xl text-center mb-6">Create your account</h1>
        </div>
        <div>
          <div>
       
          <p className="text-red-500 font-bold">
              {error && error.name && error.name}
            </p>
          
            <input
              type="text"
              name="name"
              placeholder="name"
              className="border-2   border-solid border-[#5de0e6] py-[1em]  px-[3em]  rounded-lg my-4"
            
              onChange={(e) => handleChange(e)}

            />
          </div>
       

          <div>
          <p className="text-red-500 font-bold">
              {error && error.email && error.email}
            </p>
          
          
       <input
         type="text"
         name="email"
         placeholder="Email"
         className="border-2   border-solid border-[#5de0e6] py-[1em]  px-[3em]  rounded-lg my-4"
       
         onChange={(e) => handleChange(e)}

       />
     </div>
          <div>
           
          <p className="text-red-500 font-bold">
              {error && error.password && error.password}
            </p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
              onChange={(e) => handleChange(e)}


            />
          </div>

          
          <div>
           
          <p className="text-red-500 font-bold">
              {error && error.confirmPassword && error.confirmPassword}
            </p>
            <input
              type=" confirm password"
              name="confirm password"
              placeholder="confirm password"
              className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
              onChange={(e) => handleChange(e)}


            />
          </div>
          
        </div >
    
        <button
          className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4"
          onClick={(e) => handleSignUp(e)}

        >
          Create an account
        </button>
        <div className="flex justify-center items-center ">
        <h2 className="my-4 flex   ">
          already  have an account?
         <Link to="/Signup"><span className="text-[#004aad]  cursor-pointer">Login</span></Link>
        </h2>
        </div>
      </div>
    </div>
    </div>
        </>
    )
}
export default SignUpContent;