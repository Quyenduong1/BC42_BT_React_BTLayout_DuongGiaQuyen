import React from 'react'
import Banner from './Banner'
import Header from './Header'

function Glasses() {
  return (
    <div style={{ backgroundSize: 'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat' ,backgroundImage: `url("./glassesImage/background.jpg")`}}>
        <Header/>
        <div style={{width:'75%', margin:'auto'}}>
            <Banner/>
            
        </div>
    </div>
  )
}

export default Glasses