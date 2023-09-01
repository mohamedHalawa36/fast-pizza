import Spinner from "react-bootstrap/Spinner";
import loaderImg from "../assets/pizza loader.png";
function Loader() {
  return (
    <div className=" flex items-center justify-center h-screen absolute left-0 top-0 z-20 backdrop-blur-md w-screen bg-opacity-50 bg-stone-800">
      <div className=" relative w-full h-full">
        <span className=" absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <Spinner
            style={{
              width: "120px",
              height: "120px",
              borderWidth: "3px",
              animationName: "custom-spin",
              animationDuration: "0.8s",
              animationTimingFunction:"linear"
            }}
            animation="border"
            className=" text-yellow-500"
          />
        </span>
        <img
          src={loaderImg}
          alt="pizza loader"
          className="w-[75px] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
        />
      </div>
    </div>
  );
}

export default Loader;
