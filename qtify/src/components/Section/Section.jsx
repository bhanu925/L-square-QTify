import React, { useState } from 'react'
import { CircularProgress } from '@mui/material';
import styles from './Section.module.css'
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
export default function Section({title , data , type}) {

  const [carouselToggle ,setCarouselToggle] = useState(true);
  const handleToggle=()=>{
    setCarouselToggle((prev)=>!prev);
  }
  return (
    <>
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle? "Collapse": "Show All"}</h4>
      </div>
      {data && data.length===0 ?(<CircularProgress/>):
      (
        <div className={styles.cardWrapper}>
          {!carouselToggle? (
            <div className={styles.wrapper}>
              {data.map((element) => 
              (<Card data={element} type={type}/>) )}  
            </div>
          ):
          (<Carousel data={data} 
          renderComponent={(data)=> <Card data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
    </>
  )
}
