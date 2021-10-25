import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

function CarouselComponent() {
  return (
    <div className="container">
        <Carousel className="containerCarousel">
            <Carousel.Item>
                <img
                className="d-block w-100 imagem"
                src="https://images7.alphacoders.com/737/thumb-1920-737400.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imagem"
                src="https://images4.alphacoders.com/945/thumb-1920-945737.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imagem"
                src="https://images5.alphacoders.com/673/thumb-1920-673996.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselComponent;