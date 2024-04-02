import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import styles from './Section.module.css'
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import Filters from '../Filters/Filters';

export default function Section({title , data ,filterSource, type}) {

  const [carouselToggle ,setCarouselToggle] = useState(true);
  const [filters , setFilters] = useState([{ key:'all', label:'All' }]);
  const [selectedFilterIndex ,setSelectedFilterIndex] = useState(0);

  const handleToggle=()=>{
    setCarouselToggle((prev)=>!prev);
  }

  useEffect(()=>{
    if(filterSource){
        filterSource().then((response)=>{
          const {data} = response;
          setFilters([
            ...filters,
            ...data,
          ])
        })
    }
  },[])

  const showFilters = filters.length>1;
  const cardsToRender = data.filter((element)=>
    showFilters && selectedFilterIndex !==0 ?
    element.genre.key === filters[selectedFilterIndex].key : element
  )

  return (
    <>
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle? "Collapse": "Show All"}
        </h4>
      </div>
      { 
       showFilters && (
        <div className={styles.filterWrapper}>
          <Filters 
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}            
          />
        </div>
       )

      }

      {data && data.length===0 ?(
        <CircularProgress/>):
      (
        <div className={styles.cardWrapper}>
          {!carouselToggle? (
            <div className={styles.wrapper}>
              {cardsToRender.map((element) => 
              (<Card data={element} type={type}/>) )}  
            </div>
          ):
          (<Carousel data={cardsToRender} 
          renderComponent={(data)=> <Card data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
    </>
  )
}
