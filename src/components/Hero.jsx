import { Link } from "react-router-dom";
function Hero(){
    return(
        <div>
                  <div className=" flex gap-7 justify-center flex-col flex-start bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('src/assets/images/hero1.jpg')] h-[90vh] bg-no-repeat bg-cover bg-center">
                    <h1 className="text-[4rem] text-white text-center">DIFFERENT EXPERIENCES IN ONE PLACE.</h1>
                    <p className="text-white text-xl text-center">Help others learn how to travel the world and find some really goodspots of the beaten path</p>
                    <Link to="/allblogs"><button className="border border-white py-3 px-4 text-white block mx-auto ">Start Exploring</button></Link>
                  </div>
        </div>

    )
}
export default Hero;