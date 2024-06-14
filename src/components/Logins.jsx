import {Link} from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
function Logins() {

  const [formData, setFormData] = useState({})
  const[error,setError]=useState({})
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

const navigate=useNavigate();
function handleInputChange(e){
  setFormData({ ...formData, [e.target.name]: e.target.value });

}
async function handleLogin(e){
  const errors={}
  if (!formData.email || formData.email === "") {
    errors.email = "Please enter your email";
  }
  if (!formData.password || formData.password === "") {
    errors.password = "Please enter your password";
  }
  setError(errors);


  if (!error === false) {
    setLoading(true);

    const url = "http://localhost:5000/api/auth/signin";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, options);
    const data = await response.json().catch((err) => {
      console.log(err)
      setLoading(false);

    });
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      navigate("/dashboard");


    } else {
      setErrorMessage("")
      
    }


}}
  return (
    <>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('src/assets/bg-image.jpeg')] h-[100vh] bg-cover bg-no-repeat bg-center ">
               <div className="flex justify-center items-center">
               {/* {loading && <Loader />} */}

      <div className="py-[7em] px-[7em] shadow-[0_0_5px_white] flex mt-[2rem] flex-col items-center justify-between bg-white rounded-[20px]">
        <div>
          <h1 className="font-bold  text-3xl text-center mb-6">Login to your account</h1>
        </div>
        <div>
          <div>
       
          <p className="text-red-500 font-bold">
              {(error && error.email) && error.email}
            </p>
          
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border-2   border-solid border-[#5de0e6] py-[1em]  px-[3em]  rounded-lg my-4"
            
              onChange={(e) => handleInputChange(e)}
              disabled={loading}

            />
          </div>
       
          <div>
          <p className="text-red-500 font-bold">
              {(error && error.password) && error.password}
            </p>
           
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2   border-solid border-[#5de0e6]   py-[1em]  px-[3em]  rounded-lg outline-none my-4"
         
              onChange={(e) => handleInputChange(e)}
              disabled={loading}

            />
          </div>

          
          
        </div >
    
        <button
          className="text-center bg-[linear-gradient(#5de0e6,#004aad)] text-[#fff] border   py-[1em] px-[3em] rounded-lg outline-none my-4"
          onClick={(e)=>handleLogin(e)}

        >
          Login To Your account
        </button>
        <div className="flex justify-center items-center ">
        <h2 className="my-4 flex   ">
          Dont  have an account?
         <Link to="/Signup"><span className="text-[#004aad]  cursor-pointer">Sign Up</span></Link>
        </h2>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Logins;
