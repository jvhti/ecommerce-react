import React from 'react';
import './AboutSection.css';
import '../Sections.css';
import OurClients from './AboutSectionOurClients.js';
import Stats from './AboutSectionStats.js';

function AboutSection(props) {
  return (
      <section id={props.id} className="section about_section">
        <h3 class="section__title">About Us</h3>
        <div>
          <h4 class="section__subtitle">Our History</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in leo dapibus, pretium felis ac, ultrices dui. Praesent vel ante nulla. Proin suscipit ornare rhoncus. Quisque convallis purus vel ante ornare fringilla. Vestibulum sodales lorem vitae commodo porttitor. Nulla pellentesque risus quis rhoncus dignissim. Vivamus semper volutpat orci vitae molestie. Quisque venenatis rutrum dapibus. Curabitur semper rutrum turpis eu pretium.</p>
          <p>Suspendisse ut elementum metus. Donec a tortor quis quam cursus viverra. Praesent laoreet metus arcu. Curabitur molestie elementum massa, sed suscipit mi interdum porta. Vestibulum facilisis tincidunt sem, at porta quam. Donec vel hendrerit urna. Maecenas euismod nunc augue. Sed semper, quam et semper rhoncus, risus velit ultrices erat, sit amet feugiat tortor dolor ac tellus. Curabitur sit amet lectus neque. Donec sodales vehicula est, et sollicitudin velit eleifend quis. Mauris ex risus, varius eu est vel, porta auctor mauris. Phasellus quis tortor convallis mauris pulvinar lobortis eu ac lectus.</p>
        </div>
        <div>
          <h4 class="section__subtitle">Our Clients</h4>
          <OurClients/>
        </div>
        <Stats/>  
      </section>
  );
}

export default AboutSection;
