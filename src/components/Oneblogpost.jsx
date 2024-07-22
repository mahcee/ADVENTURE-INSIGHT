import { useLocation } from "react-router-dom";

function Oneblogpost() {
  const blogLocation = useLocation();
  const { title, location, description, hotels, coverImg } = blogLocation.state;
  return (
    <div>
      {console.log(title)}
      <img className="w-[500px] h-[500px]" src={coverImg ? coverImg : "/src/assets/images/one.jpg"} />
      <div>
        <p>{title}</p>
        <p>{location && location}</p>
        <p>{hotels && hotels.join(",")}</p>
        <h1 className="text-[20px]">Details And Activities</h1>
        <p>{description && description} </p>
        <h1 className="text-[20px]">Pictures</h1>
      </div>
    </div>
  );
}
export default Oneblogpost;
