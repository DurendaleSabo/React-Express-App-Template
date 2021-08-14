import React  from 'react';
import { Carousel } from 'react-bootstrap';


const Carroussel = () => {
    return   <Carousel fade>
    <Carousel.Item>
    <img style={{height:500}}
        className="d-block w-100 "
        src="/images/gris.png"   
        alt="1 slide"
        />
      <Carousel.Caption>
        <h3>Cobaturage</h3>
        <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:500}} 
        className="d-block w-100"
        src="/images/gris.png"
        alt="2 slide"
      />
  
      <Carousel.Caption>
        <h3>Waze des Mers
        </h3>
        <p>les projet de VHAGYC</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:500}} 
        className="d-block w-100"
        src="/images/gris.png"
        alt="3 slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>les projet de VHAGYC</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:500}} 
        className="d-block w-100"
        src="/images/gris.png"
        alt="4 slide"
      />
  
      <Carousel.Caption>
        <h3>4slide </h3>
        <p>les projet de VHAGYC</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}

export default Carroussel;