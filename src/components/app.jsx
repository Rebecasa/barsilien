import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import pictures from '../data/pictures';
import reviews from '../data/reviews';
import LeftArrow from './left_arrow.jsx';
import RightArrow from './right_arrow.jsx';
import Header from './header.jsx';
import Cover from './cover.jsx';
import PictureList from './picture_list.jsx';
import ReviewList from './review_list.jsx';
import Marker from './marker';

library.add(fab, faEnvelope)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures,
      currentIndex: 0,
      translateValue: 0,
      reviews
     }
    }

    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;

      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }));
     }

    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.pictures.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }

      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + - (this.slideWidth())
      }));
    }

    slideWidth = () => {
       return document.querySelector('.picture').clientWidth
    }

    center() {
    return {
      lat: 52.498190,
      lng: 13.442230
    };
  }

  render() {
    return (
      <div className="main-container">
        <div id="navbar" className="navbar">
          <Header />
        </div>

        <div id="cover_page">
          <Cover />
        </div>

        <div className="pic-rev">
          <div id="pictures">
             <h2 className="title-container">Pictures</h2>
            <div className="slider">
              <div className="slider-wrapper"
                  style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: 'transform ease-out 0.45s'
                  }}>
                <PictureList  pictures={this.state.pictures} />
              </div>

              <LeftArrow  goToPrevSlide={this.goToPrevSlide} />
              <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
          </div>

          <div id="reviews">
            <h2 className="title-container">What our customers says about us:</h2>
            <div className="reviews">
              <ReviewList  reviews={this.state.reviews} />
            </div>
          </div>
        </div>

        <div id="contact">
          <h2>Contact</h2>
          <div className="contact">
            <div className="contact-info-hours">
              <div className="contact-information">
                <h2>Bärsilien</h2>
                <p>Falckensteinstraße 35, Berlin</p>
                <p>Contact Number: 0177 1690204</p>
              </div>

              <div className="info-links">
                <div className="info-hours">
                 <p className="title-info-hours">Open hours:</p>
                 <p>Thurdays - Sundays</p>
                 <p>12:00 - 19:00</p>
                </div>

                <ul className="icons">
                    <li><a href="mailto:baersilien@gmail.com"><FontAwesomeIcon icon="envelope" /></a></li>
                    <li><a href="https://www.facebook.com/Baersilien"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href="https://www.instagram.com/baersilien/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
              </div>
            </div>
            <div className="map-container">
              <GoogleMapReact
              defaultCenter={this.center()}
              defaultZoom={12}
              // bootstrapURLKeys={{ key:`${GOOGLE_KEY}`}}
              >
                <Marker lat={52.498190} lng={13.442230} />
              </GoogleMapReact>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
