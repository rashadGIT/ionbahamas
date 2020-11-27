import React, { useEffect, useState } from 'react';

export default function CarouselSlider(props){
    return (
    <div key={props.name}>
        <img alt="" src={props.background} />
        {props.children}
    </div>)
}