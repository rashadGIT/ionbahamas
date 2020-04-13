import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css'

export default class extends Component{
  render(){
    return(
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            interval={5000}
            transitionTime={350}
            swipeable={true}
            dynamicHeight={false}
          >
            <div>
              <div>
                <div style={{display: 'inline-block', backgroundColor: '#e6e6e6', width : '30%'}}>
                  <p>nfoewnofnroegfnoirengoi jnfirewhfnoiegoir giroejgnoer</p>
                </div>
                <div style={{display: 'inline-block', width : '70%'}}>
                  <img src="https://assets-edge.slickpic.com/img/homepage/slickpic-photo-hosting-and-sharing-quality.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </div>
            </div>
            <div>
                <div style={{display: 'inline-block', backgroundColor: '#e6e6e6', width : '30%'}}>
                  <p>nfoewnofnroegfnoirengoi jnfirewhfnoiegoir giroejgnoer</p>
                </div>
                <div style={{display: 'inline-block', width : '70%'}}>
                  <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/20/720422-image1-stsci-h-p1835a-m-2000x1768.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gentau_Pic_du_Midi_Ossau.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
    )
  }
}