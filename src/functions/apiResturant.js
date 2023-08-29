const API_URL_M = "https://react-fast-pizza-api.onrender.com/api";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  const req = await fetch(`${API_URL_M}/menu`);
  const res = await req.json();
  return res.data;
};

export const getOrderById = async (id) => {
  const req = await fetch(`${API_URL}/order/${id}`);
  // if(!req.ok) throw new Error(`Faild to load order ${id}`);
  const res = await req.json();
  return res.data;
};

export async function placeOrder(newOrder) {
  try {
    const req = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if (!req.ok) return {status:"failed"}
    // throw Error("Failed creating your order");
    const res = await req.json();
    return res.data;
  } catch {
    return {status:"failed"}
  }
}

export const getOrder = async (id) => {
  const req = await fetch(`${API_URL}/order/${id}`);
  if (!req.ok) {
    const error = await req.json();
    throw new Error(error.message);
  }
  const order = await req.json();
  return order.data;
};

//X16VC9
