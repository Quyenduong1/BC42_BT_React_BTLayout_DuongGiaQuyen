import React from 'react'

import styles from './index.module.css'

function Banner() {
  return (
    <div>
        <div className={styles.Banner} style={{display:'flex', justifyContent:'space-around'}}>
            <img src="./glassesImage/model.jpg" alt="" />
            <img src="./glassesImage/model.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner