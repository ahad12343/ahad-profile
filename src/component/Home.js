import React from 'react'
import Banner from './Banner'
import Introduce from './Introduce'
import Location from './Location'
import Footer from './Footer'
function Home() {
  return (
  <>
  <div className='container'>
    <Banner />
   <Introduce />
   <Location />
  </div>
  <Footer />
  </>
  )
}

export default Home
