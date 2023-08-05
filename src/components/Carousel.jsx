import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="200px" src="src\assets\tokio.jpg" alt="Tokio"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="200px" src="src\assets\New York.jpg" alt="New York" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="200px" src="src\assets\London.jpg" alt="London" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default Gallery