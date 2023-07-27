import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';

export const SingleReciepe = () => {
  const {reciepeId} =useParams();

  const reciepe = data.find((data) => data.id === reciepeId);
 
  const { img, title } = reciepe;
    return (
    <>
    <img src={img} />
    <h5>{title}</h5>
    
    <h5>Single Product {reciepeId}</h5>
    </>
    
  )
}
