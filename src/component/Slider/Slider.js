

import {Carousel} from "react-bootstrap"


import slider6 from "../../assets/Images/slider6.jpg"
import slider2 from "../../assets/Images/slider2.jpg"
import slider3 from "../../assets/Images/slider3.jpg"
import slider4 from "../../assets/Images/slider4.jpg"
import slider5 from "../../assets/Images/slider5.jpg"



import "./slider.css"
function ImageSlider(){
    return(
        <Carousel fade className="sld">
            <Carousel.Item className="sld">
                <img
                className="d-block w-100"
                src={slider6}
                alt="First slide"
                height="300px"
                />
                <Carousel.Caption className="sld" >
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
                height="300px"
                />

                <Carousel.Caption className="sld">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
                height="300px"
                />

                <Carousel.Caption className="sld">
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider4}
                alt="Third slide"
                height="300px"
                />

                <Carousel.Caption className="sld">
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider5}
                alt="Third slide"
                height="300px"
                />

                <Carousel.Caption className="sld">
                <h3>Fifth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    )
}
export default ImageSlider;