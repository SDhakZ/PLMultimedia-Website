import { style } from "jade/lib/runtime";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DomainCSS from "../components/CSSmodules/domainSearch.module.css";

function DomainSearch() {
  const [domain, updateDomain] = useState("");
  const [informUser, setInformUser] = useState(
    <p className={DomainCSS.informUser}></p>
      Enter your domain to check if its available
    </p>
  );

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
            <p className={DomainCSS.informUser} style={{ color: "red" }}>
              The domain you have entered is invalid! please try again.
            </p>
          );
        } else {
          if (available === false) {
            setInformUser(
              <p className={DomainCSS.informUser} style={{ color: "red" }}>
                The domain you have entered is already taken! try another
                domain.
              </p>
            );
          } else if (available === true) {
            setInformUser(
              <p className={DomainCSS.informUser} style={{ color: "green" }}>
                The domain you have entered is available!!! "{" "}
                <Link
                  to="/contact"
                  style={{ color: "#0e63e3", textDecoration: "none" }}
                >
                  Contact us
                </Link>{" "}
                " to register your domain.
              </p>
            );
          } else {
            setInformUser(
              <p className={DomainCSS.informUser} style={{ color: "red" }}>
                Some unexpected error has occured please try again.
              </p>
            );
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

      {informUser}

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
