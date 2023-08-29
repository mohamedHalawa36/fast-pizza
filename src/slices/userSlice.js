import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../functions/apiGeolocation";
import { redirect } from "react-router-dom";
const API_URL = "https://r1eact-fast-pizza-api.onrender.com/api";

function getPosition() {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
export const fetchAddress = createAsyncThunk("getAddress", async () => {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;
  const coords = { longitude, latitude };
  const { countryName, city, locality } = await getAddress(latitude, longitude);
  const address = `${countryName}, ${city}, ${locality}`;
  return { address, coords };
});

// export const placeOrder = createAsyncThunk("createOrder", async (newOrder) => {
//   const req = await fetch(`${API_URL}/order`, {
//     method: "POST",
//     body: JSON.stringify(newOrder),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const res =await req.json()

//   return res.data;
// });

const initialState = {
  name: "",
  address: "",
  addressStatus: "idle",
  cart: [],
  position: {},
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.name = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incQuantity: (state, action) => {
      const item = state.cart.find(
        (element) => element.pizzaId === action.payload,
      );
      item.quantity++;
    },
    decQuantity: (state, action) => {
      const item = state.cart.find(
        (element) => element.pizzaId === action.payload,
      );
      item.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.addressStatus = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.addressStatus = "idle";
        state.address = action.payload.address;
        state.position = action.payload.coords;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        throw new Error(action.error.message);
      })
      // .addCase(placeOrder.fulfilled,(state,action)=>{
      //   state.cart = []
      //   const {id} = action.payload
      //   redirect(`/order/${id}`)
      // }).addCase(placeOrder.rejected,(state,action)=>{
      //   throw new Error("failed to create order")
      // })
  },
});

export const {
  clearCart,
  addToCart,
  deleteFromCart,
  incQuantity,
  decQuantity,
  addUserName,
} = userSlice.actions;

export default userSlice.reducer;
