import React from "react";
import "./App.css"
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Home/Home";
import { Box } from "@mui/material"
import styled from "@emotion/styled";
import ContextProvider from "./Components/ContectAPI/Context";
import Details from "./Components/Detailed/Details";
import Cart from "./Components/Cart";
import CartRightSide from "./Components/CartRightSide";
import toast, { Toaster } from 'react-hot-toast';


const HomeComponetWrapper = styled(Box)`
margin-top:50px
`
const DataContext = createContext()

const App = () => {
  const [account, setAccount] = useState("")
  
  return (
    <>
      <DataContext.Provider value={[account, setAccount]}>

<BrowserRouter>
        <Header />
        <Routes>          

        <Route path="/" element={
        <HomeComponetWrapper>
        <Home />
        </HomeComponetWrapper>
        }  />
        <Route path="/Details/:ObjectId" element={<Details/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        {/* <Route path="/CartRightSide" element={<CartRightSide/>}/> */}

        </Routes>
    <Toaster />

        </BrowserRouter>
        </DataContext.Provider>

    </>
  )
}

export default App;
export  {DataContext}
