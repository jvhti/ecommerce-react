import React from 'react';
import './AboutSectionStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutSectionStat(props) {
  return (
    <div className="about_section__stats__stat">
      <FontAwesomeIcon className="about_section__stats__stat__icon" icon={props.icon} size="3x"/>
      <h6 className="about_section__stats__stat__text"><small className="about_section__stats__stat__number">{props.number}</small> {props.text}</h6>
    </div>
  );
}

export default AboutSectionStat;
