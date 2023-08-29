import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserName } from "../slices/userSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  function startOrderHandler(e) {
    e.preventDefault();
    dispatch(addUserName(userName));
    navigate("/menu");
  }
  return (
    <div className="flex-1">
      <div className=" tracking-wide px-5 py-10 lg:px-10 lg:py-20 pb-15 text-4xl text-center font-semibold">
        <h1 className=" mb-4 text-stone-700  ">The best pizza.</h1>
        <p className=" text-yellow-500 text-2xl lg:text-4xl">
          Straight out of the oven, straight to you.
        </p>
      </div>
      <p className=" text-center text-stone-600 text-lg lg:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form onSubmit={startOrderHandler} className=" text-center">
        <input
        defaultValue={"mohamed"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={`Your full name`}
          className={`px-5 rounded-full outline-transparent border-0 m-8 py-3 w-[300px] transition-all duration-300 ring-yellow-500 ring-offset-4 focus:ring-2`}
        />
        {userName.length > 0 && (
          <div className="text-center">
            <Button classes={`py-3 px-5`} type={`primary`}>
              Start Order
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Home;
