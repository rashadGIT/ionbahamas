import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import YouTube from 'react-youtube';
import { opts } from '../css/youTube.css.js'
import Header from '../components/Header'
import SideBar from '../components/Sidebar/SideBar';
 
 
export default function howTo(props){ 
    return (
        <div>
            <Header />
            {/* <SideBar/> */}
            <YouTube
                videoId={"2g811Eo7K8U"}           // defaults -> null
                // id={string}                       // defaults -> null
                // className={string}                // defaults -> null
                // containerClassName={string}       // defaults -> ''
                opts={opts}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                // onPause={func}                    // defaults -> noop
                // onEnd={func}                      // defaults -> noop
                // onError={func}                    // defaults -> noop
                // onStateChange={func}              // defaults -> noop
                // onPlaybackRateChange={func}       // defaults -> noop
                // onPlaybackQualityChange={func}    // defaults -> noop
            />
        </div>
    )
}