import React, {Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import '../css/infinitecarousel.css';

export default class extends Component{
  render(){
    const sponsorValues = [
      {img : 'https://cdn.designcrowd.com/blog/2015/December/top-100-brands-logo-2015/9_500.png'},
      {img : 'https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg'},
      {img : 'http://www.sclance.com/pngs/company-logo-png/company_logo_png_308234.png'},
      {img : 'http://www.stingergames.com/foosball/media/StingerGames_White.png'},
      {img : 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/wonga-loan-company-logo.png?fit=600%2C300'},
      {img : 'https://assetsv2.fiverrcdn.com/assets/v2_globals/fiverr-logo-new-green-64920d4e75a1e04f4fc7988365357c16.png'},
      {img : 'http://www.burial-grounds.com/wp-content/gallery/company-logos/apple-logo_black.png'},
      {img : 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b2c67.png'},
      {img : 'https://banner2.kisspng.com/20180609/uhy/kisspng-logo-generic-drug-corporation-clip-art-5b1b6a162abe05.7481962415285232861751.jpg'}
  
    ];
    const title = (<h3>Our Corporate Sponsors</h3>);
    return(
      <div className="caroselContainer">
      {(sponsorValues.length > 7) ? <center>{title}</center> : <div className="centerTitle">{title}</div>}
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={1}
        sideSize={.1}
        slidesToScroll={2}
        slidesToShow={7}
        scrollOnDevice={true}
        lazyLoad={true}
        swipe={true}
        slidesSpacing={10}
        responsive={true}
    >
      {sponsorValues.map(x => 
      <div>
        <img
          className="sponsorLogo"
          alt=''
          src={x.img}
        />
      </div>)}
    </InfiniteCarousel>
    </div>
    )
  }
}