/*This is the Services Component for PL. it calls all the necessary
Service components to form the Services page for PL Multimedia*/ 

import React from "react";
import {ServiceCard, MoreCard} from './ServiceCard';
import "./Services.css";

function Services () {
    return(
        <div className="serviceCardSection">
            <ServiceCard logo={require("./logo/advertisement.png")} title="Advertisement" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/webDevelopment.png")} title="Web Development" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/webHosting.png")} title="Web Hosting" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/mobileAppDevelopment.png")} title="Mobile App Development" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/seo.png")} title="SEO Optimization" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/digitalMarketing.png")} title="Digital Marketing" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            <ServiceCard logo={require("./logo/mediaProduction.png")} title="Media Production" description="lorem20 is not working on my vs code so i am randomly typing this paragraph. And how is the weather there in kathmandu?"/>
            
            <MoreCard moreDetails="AND MANY MORE ..."/>
            
        </div>
        
    )
}

export default Services;