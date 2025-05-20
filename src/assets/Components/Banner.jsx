import React from 'react'
import BannerContent from './BannerContent'
import bannerimage from "../Images/bannerdummy.webp"

function Banner() {
  return (
  <BannerContent
  banner_image={bannerimage}
  netheading="banner heading"
  banner_para="this is banner paragraph"
  
  />
  )
}

export default Banner