import React from 'react';
import {
    bouceOut,
    bounce,
    bounceIn,
    bounceInDown,
    bounceInLeft,
    bounceInRight,
    bounceInUp,
    bounceOutDown,
    bounceOutLeft,
    bounceOutRight,
    bounceOutUp,
    fadeIn,
    fadeInDown,
    fadeInDownBig,
    fadeInLeft,
    fadeInLeftBig,
    fadeInRight,
    fadeInRightBig,
    fadeInUp,
    fadeInUpBig,
    fadeOut,
    fadeOutDown,
    fadeOutDownBig,
    fadeOutLeft,
    fadeOutLeftBig,
    fadeOutRight,
    fadeOutRightBig,
    fadeOutUp,
    fadeOutUpBig,
    flash,
    flip,
    flipInX,
    flipInY,
    flipOutX,
    flipOutY,
    headShake,
    hinge,
    jello,
    lightSpeedIn,
    lightSpeedOut,
    pulse,
    rollIn,
    rollOut,
    rotateIn,
    rotateInDownLeft,
    rotateInDownRight,
    rotateInUpLeft,
    rotateInUpRight,
    rotateOut,
    rotateOutDownLeft,
    rotateOutDownRight,
    rotateOutUpLeft,
    rotateOutUpRight,
    rubberBand,
    shake,
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp,
    slideOutDown,
    slideOutLeft,
    slideOutRight,
    slideOutUp,
    swing,
    tada,
    wobble,
    zoomIn,
    zoomInDown,
    zoomInLeft,
    zoomInRight,
    zoomInUp,
    zoomOut,
    zoomOutDown,
    zoomOutLeft,
    zoomOutRight,
    zoomOutUp
} from 'react-animations'
import Radium, {StyleRoot} from 'radium';

export const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
      },
    fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    fadeInDownBig: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    },
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    slideInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    },
    tada: {
        animation: 'x 1s',
        animationName: Radium.keyframes(tada, 'tada')
    },
    zoomInDown: {
        animation: 'x 3s',
        animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
    },
    zoomInUp: {
        animation: 'x 3s',
        animationName: Radium.keyframes(zoomInUp, 'zoomInUp')
    },
    rollIn: {
        animation: 'x 3s',
        animationName: Radium.keyframes(rollIn, 'rollIn')
    },
    rotateIn: {
        animation: 'x 3s',
        animationName: Radium.keyframes(rotateIn, 'rotateIn')
    },
  };