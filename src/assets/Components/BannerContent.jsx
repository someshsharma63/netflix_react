import React from 'react'

function BannerContent({banner_image,netheading,banner_para}) {
  return (
  <>
  
  <div className='netflix_banner'>
    <div className='banner_background'>
          <div className='herocontent'>
          <h1>{netheading}</h1> 
       <div className='banner_btn'>
            <button>Play</button>
            <button>My List</button>
       </div>
       <p>{banner_para}</p>
    </div>
    </div>
  
     
  </div>
  </>
  )
}

export default BannerContent