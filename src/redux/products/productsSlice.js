import { createSlice } from "@reduxjs/toolkit";
import productJSON from "./product.json"
import { nanoid } from "@reduxjs/toolkit";


 export const productsSlice=createSlice({
     name:"product",
     initialState:{
        items:[...productJSON, ...productJSON].map(img=>({...img, id:nanoid()})),
        filterProd:[],
        basket:JSON.parse(localStorage.getItem("basket")),
        status:"idle",
        isCompleted:false,
     },
     reducers:{
         filtered:(state,action)=>{
             const category=action.payload;
             const filterProducts=state.items.filter(item=>item.category===category)
             state.filterProd=filterProducts;
         },
         addBasket:(state,action)=>{
             const items=action.payload;
             
            if( !localStorage.basket){
                localStorage.setItem("basket", JSON.stringify(items))
             }
             else{
                let orders=JSON.parse(localStorage.getItem("basket"));
                orders.push(items[0])

                 for(let i=0; i<orders.length; i++){
                     for(let j=i+1; j<orders.length; j++){
                         if(orders[i].id===orders[j].id){
                             orders.splice(j,1)
                         }
                     }
                 } 
                 localStorage.setItem("basket",JSON.stringify(orders))
             } 
            state.basket=JSON.parse(localStorage.getItem("basket"))
         },
         removeBasket:(state,action)=>{
            const id=action.payload
            const index=state.basket.findIndex(item=>item.id===id)
            state.basket.splice(index,1)

            localStorage.setItem("basket", JSON.stringify(state.basket))

         },
         
     },
 })

export const {filtered, addBasket, removeBasket}= productsSlice.actions;
 export default productsSlice.reducer;