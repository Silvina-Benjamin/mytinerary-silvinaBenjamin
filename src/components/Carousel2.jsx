import React, { useState } from 'react'
import Arrow from './Arrow'


const images = [
  'https://www.pexels.com/es-es/foto/puente-de-hormigon-gris-sobre-cuerpo-de-agua-3593948/', 
  'https://www.pexels.com/es-es/foto/puente-de-la-torre-de-londres-220887/',
  'https://www.pexels.com/es-es/foto/torre-iluminada-2614818/',
  'https://www.pexels.com/es-es/foto/vista-aerea-de-torre-eiffel-1308940/',
  'https://www.pexels.com/es-es/foto/foto-de-la-ciudad-durante-el-amanecer-3757144/',
  'https://www.pexels.com/es-es/foto/barcos-en-un-rio-1796705/',
  'https://www.pexels.com/es-es/foto/vista-aerea-de-sydney-995764/',
  ''
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
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt='flecha-i' fn={prev} />
      <div className='bg-slate-500 w-[40vw] h-[35vh] p-2 rounded-md m-4'>
        <div className='flex gap-1 items-center h-full justify-center px-4'>
          <img src={images[index]} alt="" />
        </div>
        <div className='flex w-full justify-center mt-4'>
          {
            images.map((item, indexMap) => {
              if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
              else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
            })
          }
        </div>
      </div>
      <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='flecha-d' fn={next} />

      {/* <h1 className='text-8xl'>{index + 1}</h1> */}
    </div>
  )
}

export default Carousel   