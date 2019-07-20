import React from 'react';
import AboutSectionOurClientsClient from './AboutSectionOurClientsClient.js';
import './AboutSectionOurClients.css';

function AboutSectionOurClients(props) {
  return (
    <div class="about_section__clients">
      <AboutSectionOurClientsClient link="#" logoSrc="img/logo-1.svg" logoAlt="ACME 1 Logo" name="ACME 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et eleifend purus. Donec tempus justo sem, vel convallis nibh scelerisque id. Nulla sit amet augue vel nunc hendrerit eleifend vitae a enim. Maecenas ut imperdiet odio, quis ornare lectus. Donec in augue id sapien hendrerit."/>
      <AboutSectionOurClientsClient link="#" logoSrc="img/logo-2.svg" logoAlt="ACME 2 Logo" name="ACME 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur, purus eleifend ullamcorper consequat, ipsum arcu tristique enim, at bibendum ipsum libero sit amet quam. Mauris ornare lobortis arcu, eget hendrerit libero aliquet ut. Suspendisse vel lacus pellentesque, accumsan neque sit amet, porta nunc."/>
      <AboutSectionOurClientsClient link="#" logoSrc="img/logo-5.svg" logoAlt="ACME 3 Logo" name="ACME 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ipsum mi, ullamcorper tincidunt felis tincidunt eget. Donec sodales odio quis mollis fringilla. Etiam tempus orci volutpat, aliquam arcu sit amet, convallis massa. Integer."/>
      <AboutSectionOurClientsClient link="#" logoSrc="img/logo-8.svg" logoAlt="ACME 4 Logo" name="ACME 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum sem sed tellus sollicitudin sollicitudin. Ut vel laoreet libero. Praesent tempor sed elit at malesuada. Integer ut enim tempus."/>
    </div>
  );
}

export default AboutSectionOurClients;
