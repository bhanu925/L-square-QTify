import React from 'react'
import {Tooltip ,Chip} from '@mui/material/'
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
export default function Card({data ,type}) {

    const getCard = (type)=>{

        switch(type){
            case "album":{
                const { image , title , slug , follows , songs } =data;
                return (<>
                  <div>
                      <Tooltip title={songs.length} placement="top" arrow >
                          <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                 <img src={image} alt="album" />
                                <div className={styles.banner}> 
                                    <Chip label={`${follows} Follows`}
                                        size='small'
                                        className={styles.chip}/>
                                </div>
                                    
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                          </Link>
                      </Tooltip>
                  </div>
                  </>)
            }
            case "song":{
                const {image , title ,likes} = data;

                return(
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="song" />
                        <div className={styles.banner}> 
                            <Chip label={`${likes} Likes`}
                            className={styles.chip}/>
                        </div>
                        
                    </div>
                    <div className={styles.titleWrapper}>
                        <p>{title}</p>
                    </div>
                </div> 
                )
            }

            default:
                {return<></>}
        }
      
    }
    return getCard(type);
}
