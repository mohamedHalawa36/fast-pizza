import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex-1 p-5">
      <Link to={-1} className=" capitalize mt-5 text-blue-600 hover:underline">&larr; go back </Link>

    <div className="mt-5 flex-1 font-semibold flex flex-col justify-center items-center">
      <h1 className="mb-5 font-bold text-3xl text-red-600">Oops...</h1>
      <span className="text-xl mb-3">

      somthing went wrong
      </span>
      <p className=" capitalize font-semibold">{error.data || error.message}</p>
    </div>
    </div>
  );
}

export default Error;
