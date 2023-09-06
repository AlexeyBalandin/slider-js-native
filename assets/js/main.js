/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import Carousel from './carousel.js';
import SwipeCarousel from './swiper-carousel.js';

const carousel = new SwipeCarousel({
  containerID: '#carousel',
  interval: 2000,
  // isPlaying: false
});

carousel.init();
