import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Banner from './Banner'
import styled from '@emotion/styled'
import { Box } from "@mui/material"
import Slides from './Slides'
import Slides1 from './Slides1'
import {getProducts , getJSONProducts} from "../Components/Login/Api"
import MiddleSlide from './MiddleSlide'
import MidSection from './MidSection'
// import Search from '../Components/Search'
import MobileSearch from '../Components/SearchMobile'

const BannerWrapper = styled(Box)`
padding:10px;
background:#F2F2F2;
`
function Home() {
  const [products, setproducts]= useState([])
  const [JSONproducts, setJSONproducts]= useState([])


  async function getproducts(){
let response = await getProducts()
setproducts(response.data)
  }

  useEffect(()=>{
      getproducts()
  },[])

  async function getjsonproducts(){
    let response = await getJSONProducts()
    setJSONproducts(response.data.products)
      }

  useEffect(()=>{
    getjsonproducts()
  },[])

  return (
    <>
    <div style={{}}>
    <MobileSearch/>
    </div>
      <Nav />
      <BannerWrapper>
           <Banner />
      </BannerWrapper>
      <div style={{backgroundColor:"#F2F2F2"}}>
        <div className='middleSlide'>
      <MiddleSlide  products={products} title="Deal of the day" timer={true} />
        </div>
      <MidSection/>
       {/* <Slides1 JSONproducts={JSONproducts} title="Deal of the day" timer={false} /> */}
       <div className='SecSlide'>
      <Slides products={products} title="Deal of the day" timer={true} />
       </div>
      <Slides products={products} title="Discount for You" timer={false} />
      <Slides products={products} title="Suggesting Items" timer={false} /> 
      <Slides products={products} title="Recomended Items" timer={false} /> 
      <Slides products={products} title="Trending offers" timer={false} /> 
      <Slides products={products} title="Seasons top Picks" timer={false} /> 
      <Slides products={products} title="Top Deals on Accessories" timer={false} /> 
      </div>
    </>
  )
}

export default Home