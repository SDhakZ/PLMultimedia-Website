// this is the service card component.
// it is basically a function which takes logo,title,& description parameters to generate a service card.

import React from "react";

function ServiceCard (props) {
  return(
    <div className="serviceCard">
      <img className="logo" src={props.logo} alt="services logo"></img>
      <div className="aboutLogo">
        <p className="cardName"><b>{props.title}</b></p>
        <p className="cardDescription">{props.description}</p>
      </div>
      <button className="contactButton">Click to Contact</button>
    </div>
  )
};

function MoreCard (props) {
  return(
    <div className="serviceCard">
      <p className="moreDetails">{props.moreDetails}</p>
    </div>
  )
};

export {ServiceCard, MoreCard}; 