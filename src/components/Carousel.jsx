import React, { useState } from 'react'
import Arrow from './Arrow'


const images = [
 'https://images.pexels.com/photos/3593948/pexels-photo-3593948.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/3963060/pexels-photo-3963060.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/1981526/pexels-photo-1981526.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/2901480/pexels-photo-2901480.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/2760519/pexels-photo-2760519.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/1680249/pexels-photo-1680249.jpeg?auto=compress&cs=tinysrgb&w=600',
 'https://images.pexels.com/photos/13430650/pexels-photo-13430650.jpeg?auto=compress&cs=tinysrgb&w=600'
]

const Carousel = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  const setBullet = (indice) => {
    setIndex(indice)
  }


  return (
    <div>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt='flecha-i' fn={prev} />
      <div  className='bg-slate-500 w-[40vw] h-[35vh] p-2 rounded-md m-4'>
        <div className='flex gap-1 items-center h-full justify-center px-4'>
          <img className='h-[60vh]' src={images[index]} alt="" />
        </div>
        <div className='flex w-full justify-center mt-4'>
          {
            images.map((item, indexMap) => {
              if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>🌎</span>
              else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
            })
          }
        </div>
      </div>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='flecha-d' fn={next} />


    </div>
  )
}

export default Carousel   