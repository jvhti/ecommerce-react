import React from 'react';
import Stat from './AboutSectionStat.js';
import './AboutSectionStats.css';

function AboutSectionStats(props) {
  return (
    <div class="about_section__stats">
      <Stat icon="cart-plus" text="purchase" number="324"/>
      <Stat icon="truck" text="delivered" number="19"/>
      <Stat icon="grin-stars" text="fans" number="5"/>
      <Stat icon="dolly" text="on the way" number="12"/>
    </div>
  );
}

export default AboutSectionStats;
