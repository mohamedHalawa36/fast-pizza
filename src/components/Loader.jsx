import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Loader() {
  return (
    <div className=" flex items-center justify-center h-screen absolute left-0 top-0 z-30 backdrop-blur-3xl w-screen opacity-50 bg-stone-800">
      <FontAwesomeIcon
        className=" text-[70px]"
        color="rgb(234 179 8)"
        icon="fa-solid fa-spinner"
        spin
        size="xl"
      />{" "}
    </div>
  );
}

export default Loader;
