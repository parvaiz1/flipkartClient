import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addCart:(state, action)=>{
            let id = action.payload.id
            let idIndex = state.cart.findIndex((idInCart)=>idInCart.id===id)
            if(idIndex<0){
                state.cart.push(action.payload)
            }else{
                state.cart[idIndex].quantity++
            }
        },
        quantityIncrement:(state, action)=>{
            let id =action.payload
            let idInCart= state.cart.findIndex((idInCart)=>idInCart.id===id)
            state.cart[idInCart].quantity++
        },
        quantityDecrement:(state, action)=>{
            let id=action.payload
            let idInCart= state.cart.findIndex((idInCart)=>idInCart.id===id)
            state.cart[idInCart].quantity--
        },
        removeCart:(state, action)=>{
            let id=action.payload     
            let idInCart= state.cart.findIndex((idInCart)=>idInCart.id===id)
            state.cart.splice(idInCart, 1)
        //  let remainData=state.cart.filter((item)=>item.id!==id)
        //     state.cart=remainData
            }
    }
})

export const {addCart, quantityIncrement, quantityDecrement, removeCart} = cartSlice.actions
export default cartSlice.reducer