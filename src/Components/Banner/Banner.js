import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner(props) {
  return (
      <section class="banner" style={{"background-image": "url('https://unsplash.com/photos/vaWZyE1Z6xg/download?force=true')"}}>
        <a href="#" className="banner__CTA"><FontAwesomeIcon icon="angle-double-down"/><span className="sr-only">Go to content</span></a>
      </section>
  );
}

export default Banner;
