import React, { useState } from "react";
import DomainCSS from "../components/CSSmodules/domainSearch.module.css";

function DomainSearch() {
  const [domain, updateDomain] = useState("");
  const [informUser, setInformUser] = useState(
    "Enter your domain to check if it is available"
  );
  const [infoColor, setInfoColor] = useState("black");

  //Domain information is fetched here
  const getData = () => {
    //Object with api liscence and host information
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "40ee149ac5msh6703a39179f879ep1f99c6jsn382fa7ab1073",
        "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com",
      },
    };

    //Fetch request with our domain
    fetch(
      `https://domain-checker7.p.rapidapi.com/whois?domain=${domain}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const { valid, available } = response;
        console.log(response);
        if (valid === false) {
          setInformUser(
            "The domain you have entered is invalid! please try again."
          );
          setInfoColor("red");
        } else {
          if (available === false) {
            setInformUser(
              "The domain you have entered is already taken! try another domain."
            );
            setInfoColor("red");
          } else if (available === true) {
            setInformUser(
              "The domain you have entered is available!!! Contact us to register your domain."
            );
            setInfoColor("green");
          } else {
            setInformUser(
              "Some unexpected error has occured please try again."
            );
            setInfoColor("red");
          }
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    //This is the domain search component
    <div className={DomainCSS.domainSearchSection}>
      <div className={DomainCSS.domHeader}>
        <img
          className={DomainCSS.domHeadImg}
          src={require("../logo/www.png")}
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
        <button className={DomainCSS.searchButton} onClick={() => getData()}>
          Search
        </button>
      </div>
    </div>
  );
}

export default DomainSearch;
