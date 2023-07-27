import React,{useState} from 'react'
import data from '../data';

export const Buttons = () => {
  const [reciepes, setReciepes] = useState(data);


  //Filter type
  const filterType = (category) => {
    setReciepes(
      data.filter((item) => {
        return item.category === category;
      })
    )
  }

  return (



    <div className='m-2'>
      <button className='border border-black rounded text-center pl-2 pr-2' onClick={() => setReciepes(data)}>All</button>
      <button className='border border-black rounded text-center pl-2 pr-2' onClick={() => filterType('Burgers')} >Burgers</button>
      <button className='border border-black rounded text-center pl-2 pr-2' onClick={() => filterType('Pasta')}>Pasta</button>
      <button className='border border-black rounded text-center pl-2 pr-2' onClick={() => filterType('Donuts')}>Donuts</button>


    </div>
  )
}
