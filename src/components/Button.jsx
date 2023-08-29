import { Link } from "react-router-dom";

function Button({ children, classes, type, to, onClick,disabled }) {
  if (type === "link") {
    return (
      <Link
      to={to}
        onClick={onClick}
        className={`${classes} text-transform: uppercase ${
          type === "primary" || type === "link"
            ? "bg-yellow-500 hover:bg-yellow-300"
            : "bg-stone-100 border border-stone-300 hover:bg-stone-300 text-stone-00 hover:text-stone-700"
        }   transition-all duration-200 font-bold text-stone-800 rounded-full`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
      disabled = {disabled}
        onClick={onClick}
        className={`${classes} text-transform: uppercase ${
          type === "primary"
            ? "bg-yellow-500 hover:bg-yellow-300"
            : "bg-stone-100 border border-stone-300 hover:bg-stone-300 text-stone-00 hover:text-stone-700"
        }   transition-all duration-200 font-bold text-stone-800 rounded-full`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
