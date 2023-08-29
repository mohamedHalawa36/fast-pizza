import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { getMenu } from "../functions/apiResturant";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="divide-y h-full overflow-y-scroll divide-stone-300 lg:w-1/2 sm:mx-auto">
      {menu.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export async function loader() {
 return getMenu()
}

export default Menu;
