import React from 'react';
import './AboutSectionOurClientsClient.css';

function AboutSectionOurClientsClient(props) {
  return (
    <div class="about_section__clients__client">
      <div class="about_section__clients__client__logo">
        <a href="#"><img alt={props.logoAlt} src={props.logoSrc}/></a>
      </div>
      <h5 class="about_section__clients__client__title"><a href={props.link}>{props.name}</a></h5>
      <p class="about_section__clients__client__text">{props.text}</p>
    </div>
  );
}

export default AboutSectionOurClientsClient;
