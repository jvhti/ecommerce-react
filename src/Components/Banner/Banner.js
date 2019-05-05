import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner(props) {
  return (
      <section className="banner" style={{"background-image": props.backgroundImage}}>
        <h2 className="banner__text">{props.children}</h2>
        <a href={props.hrefCTA} className="banner__CTA"><FontAwesomeIcon icon="angle-double-down"/><span className="sr-only">Go to content</span></a>
      </section>
  );
}

export default Banner;
