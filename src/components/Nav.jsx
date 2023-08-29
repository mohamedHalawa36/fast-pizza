import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate()
  const userName = useSelector((state) => state.user.name);
  const [searchQuery, setSearchQuery] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/order/${searchQuery}`);
  };
  return (
    <div className=" bg-yellow-500  z-10 top-0 left-0 flex flex-col lg:flex-row items-center px-6 py-3 justify-between">
      <Link className="mb-3" to={`/`}>FAST PIZZA CO.</Link>
      <form className=" relative" onSubmit={searchHandler}>
        <input
          name="orderId"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search Order #`}
          type={`text`}
          className={`bg-yellow-100 py-2 px-5 rounded-full focus:outline-yellow-400 focus:outline-offset-2`}
        />
        <button className=" absolute top-1/2 right-3 -translate-y-[50%]">
        <FontAwesomeIcon color="text-stone-500" icon="fa-solid fa-magnifying-glass" />

        </button>
      </form>
      {userName && <span className=" hidden xl:inline">{userName}</span>}
    </div>
  );
}

export default Nav;
