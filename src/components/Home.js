import React from 'react';
import slide1 from '../static/slide1.png'
import slide2 from '../static/slide2.png'
import slide3 from '../static/slide3.png'
import slide4 from '../static/slide4.png'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function Home() {
    return (
        <div className='row1'>
            <div className="sidebar1">
                <Carousel variant='dark'>
                    <Carousel.Item>
                        <img width={300}
                            className="img-fluid"
                            // className='d-block w-50 float-end'
                            src={slide1} 
                            alt="First Slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={300}
                            className="img-fluid"
                            src={slide2} 
                            alt="Second Slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
export default Home;