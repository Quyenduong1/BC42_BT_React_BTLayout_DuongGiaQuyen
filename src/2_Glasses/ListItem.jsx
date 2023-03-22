import React  from 'react'

import styles from './index.module.css'

function ListItem() {
  return (
    <div style={{width:'100%'}}>
      <div className={styles.container}>
            <div className='row'>
                <img src="./glassesImage/v1.png" alt="img" />
                <img src="./glassesImage/v2.png" alt="img" />
                <img src="./glassesImage/v3.png" alt="img" />
                <img src="./glassesImage/v4.png" alt="img" />
                <img src="./glassesImage/v5.png" alt="img" />
                <img src="./glassesImage/v6.png" alt="img" />
                <img src="./glassesImage/v7.png" alt="img" />
                <img src="./glassesImage/v8.png" alt="img" />
                <img src="./glassesImage/v9.png" alt="img" />
            </div>
     </div>
    </div>
  )
}

export default ListItem