import { createSlice } from "@reduxjs/toolkit";
import productJSON from "./product.json"
 export const productsSlice=createSlice({
     name:"product",
     initialState:{
        items:[...productJSON],
        filterProd:[],
        status:"idle",
     },
     reducers:{
         filtered:(state,action)=>{
             const category=action.payload;
             const filterProducts=state.items.filter(item=>item.category===category)
             state.filterProd=filterProducts;
         }
     },
 })
export const {filtered}= productsSlice.actions;
 export default productsSlice.reducer;