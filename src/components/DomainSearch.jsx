import React, { useState } from "react";
import DomainCSS from "../components/CSSmodules/domainSearch.module.css";

function DomainSearch() {
  const [domain, updateDomain] = useState("");
  const [domainInfo, setDomainInfo] = useState("");
  const [informUser, setInformUser] = useState(
    "Enter your domain to check if it is available"
  );
  const [infoColor, setInfoColor] = useState("black");

  //Domain information is fetched here
  const getData = (callback) => {
    //Object with api liscence and host information
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "20564a779bmsh7c5886ff4fe51eap13c643jsn196f5c5373a0",
        "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com",
      },
    };

    //Fetch request with our domain
    fetch(
      `https://domain-checker7.p.rapidapi.com/whois?domain=${domain}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDomainInfo(response))
      .catch((err) => console.error(err));

    console.log(domainInfo);

    setTimeout(() => {
      callback();
    }, 2000);
  };

  //Function to display the response JSON into user readable sentence with appropirate response and text color
  const displayInfo = () => {
    console.log("the func is now starting");
    console.log(domainInfo.valid);
    console.log(domainInfo.available);
    console.log("testing segment has ended");

    if (domainInfo.valid === false) {
      setInformUser(
        "The domain you have entered is invalid! please try again."
      );
      setInfoColor("red");
    } else {
      if (domainInfo.available === false) {
        setInformUser(
          "The domain you have entered is already taken! try another domain."
        );
        setInfoColor("red");
      } else if (domainInfo.available === true) {
        setInformUser(
          "The domain you have entered is available!!! Contact us to register your domain."
        );
        setInfoColor("green");
      } else {
        setInformUser("Some unexpected error has occured please try again.");
        setInfoColor("red");
      }
    }
  };

  return (
    //This is the domain search component
    <div className={DomainCSS.domainSearchSection}>
      <div className={DomainCSS.domHeader}>
        <img
          className={DomainCSS.domHeadImg}
          src={require("../logo/www.png").default}
          alt="logo here"
        />
        <h1 className={DomainCSS.domHeadTitle}>
          Search The Availability of Your Domain
        </h1>
      </div>

      <p className={DomainCSS.informUser} style={{ color: infoColor }}>
        {informUser}
      </p>

      <div className={DomainCSS.domFooter}>
        <input
          className={DomainCSS.textField}
          onChange={(text) => updateDomain(text.target.value)}
          placeholder="Enter domain name..."
        ></input>
        <button
          className={DomainCSS.searchButton}
          onClick={() => getData(displayInfo)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default DomainSearch;
