import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import { ref, uploadString } from "firebase/storage";
// import loader from "../assets/images/loader.gif";
function AddBlog() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleAddblog(e) {
    e.preventDefault();
    const errors = {};
    if (!formData.title || formData.title === "") {
      errors.title = "please enter the Title";
    }
    if (!formData.file || formData.file === "") {
      errors.file = "please add a picture";
    }
    if (!formData.location || formData.location === "") {
      errors.location = "please enter the location";
    }
    if (!formData.description || formData.description === "") {
      errors.description = "please add the details and activities";
    }
    setError(errors);
    if (!error === false) {
      const url =
        "https://adventure-insights-backend.onrender.com/api/articles/new";
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      };
      const response = await fetch(url, options);
      const data = await response.json().catch((err) => {
        console.log(err);
      });
      if (!response.ok) {
        setErrorMessage(data.message);
        console.log(data);
      } else {
        navigate("/allblogs");
      }
    }
  }
  function onImageUpload(e) {
    const file = e.target.files[0];

    const storageRef = ref(storage, `blogs/${file.name}`);

    const reader = new FileReader();

    reader.onload = () => {
      // setIsLoading(true);
      const dataImg = reader.result;
      uploadString(storageRef, dataImg, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");
        setFormData((prev) => ({
          ...prev,
          coverImg: `https://firebasestorage.googleapis.com/v0/b/adventure-insights.appspot.com/o/blogs%2F${file.name}?alt=media`,
        }));
      });
      console.log(reader.result);
      // setIsLoading(false);
    }
    reader.readAsDataURL(file);
  }
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('src/assets/images/hero1.jpg')] h-[140vh] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex  justify-center items-center">
        <form action="" className="py-[3rem]">
          <div className="bg-white p-[3em] flex flex-col justify-between gap-8">
            <h2 className="text-white text-center">Add a Trip</h2>
            <div className="flex flex-col justify-between gap-5">
              <div>
              <p className="text-red-500 font bold">{error.file && error.file}</p>
                <div>

                <input type="file" name="file"  onChange={(e) => onImageUpload(e)} />
           
            {formData.coverImg && <img src={formData.coverImg} className="w-[200px]] h-[200px]"/>}
                </div>
              </div>
              <p className="text-red-500 font bold">
                {errorMessage && errorMessage}
              </p>

              <div>
              <p className="text-red-500 font bold">{error.title && error.title}</p>
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={(e) => handleChange(e)}
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                  />
                </div>
              </div>
              <div>
              <p className="text-red-500 font bold">{error.location && error.location}</p>
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    onChange={(e) => handleChange(e)}
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                  />
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="places to visit"
                    name="places to visit"
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                  />
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Hotels"
                    name="Hotels"
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                  />
                </div>
              </div>
              <div>
              <p className="text-red-500 font bold">{error.description && error.description}</p>
                <div>
                  <textarea
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                    placeholder="Add Details and Activities"
                    name="description"
                    onChange={(e) => handleChange(e)}
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <h1>Pictures</h1>
              <div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => onImageUpload(e)}  
                    placeholder="Add picture"
                    name="pictures"
                    className="border-2 py-2 pr-[3em] pl-2  border-[#5de0e6] rounded-md outline-none"
                    multiple
                  />
                </div>
              </div>
            </div>
            <button onClick={handleAddblog} className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] rounded-md border py-2 px-3">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddBlog;
