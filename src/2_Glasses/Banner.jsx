import React , {useState}  from 'react'

import styles from './index.module.css'
import ListItem from './ListItem'

function Banner() {
      const [img,setImg] = useState('./glassesImage/v1.png')
  return (
    <div>
        <div className={styles.Banner} style={{display:'flex', justifyContent:'space-between'}}>
            <img src="./glassesImage/model.jpg" alt="" />
            <img src="./glassesImage/model.jpg" alt="" />
        </div>

        

        <div className={styles.putGlasses}>
                <img src={img} alt="img" />
        </div>


        <div style={{width:'100%'}}>
      <div className={styles.container}>
            <div className='row'>
                <img onClick={()=>setImg("./glassesImage/v1.png")} src="./glassesImage/v1.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v2.png")} src="./glassesImage/v2.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v3.png")} src="./glassesImage/v3.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v4.png")} src="./glassesImage/v4.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v5.png")} src="./glassesImage/v5.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v6.png")} src="./glassesImage/v6.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v7.png")} src="./glassesImage/v7.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v8.png")} src="./glassesImage/v8.png" alt="img" />
                <img onClick={()=>setImg("./glassesImage/v9.png")} src="./glassesImage/v9.png" alt="img" />
            </div>
     </div>
    </div>
    </div>
  )
}

export default Banner