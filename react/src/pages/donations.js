import React from 'react';
import Layout from '../components/Layout';
import {causes} from '../module/causes'
import Card from '../components/card'
import '../css/donate.css';
import {StyleRoot} from 'radium';
import {styles} from '../module/styles'

const Donations = (props) => 
  <StyleRoot>
    <div 
      className="container-flex-card" 
      style={styles.slideInLeft}
    >
      {causes.map(Card)}
    </div>
  </StyleRoot>
export default Donations;
// export default Layout(Donations);
