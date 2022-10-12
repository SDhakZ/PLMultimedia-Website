import React from "react";
import { MainHeading } from "../../../components/MainHeading/MainHeading";
import CredentialCSS from "./credentials.module.css";
import CredentialsData from "../../../data/credentialsData";

function CredentialsCard(props) {
  return (
    <div className={CredentialCSS["credentials-card"]}>
      <img
        src={props.img}
        className={CredentialCSS["credentials-image"]}
        alt="development team"
      />

      <div className={CredentialCSS["credentials-name"]}>{props.name}</div>
      <a
        className={CredentialCSS["credentials-mail"]}
        href="https://www.gmail.com"
      >
        mail@mail.com
      </a>

      <div className={CredentialCSS["credentials-position"]}>
        {props.position}
      </div>
      <div className={CredentialCSS["credentials-iconsContainer"]}>
        <div className={CredentialCSS["credentials-icons"]}>
          <a href={props.facebookLink} rel="noreferrer" target="_blank">
            <i className={`${CredentialCSS.lineLeft} fa fa-facebook`}></i>
          </a>
          <a href={props.githubLink} rel="noreferrer" target="_blank">
            <i className={`${CredentialCSS.lineLeft} fa fa-github`}></i>
          </a>
          <a href={props.instagramLink} rel="noreferrer" target="_blank">
            <i className={`${CredentialCSS.lineLeft} fa fa-instagram`}></i>
          </a>
          <a href={props.linkedinLink} rel="noreferrer" target="_blank">
            <i className={`${CredentialCSS.lineLeft} fa fa-linkedin`}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export const Credentials = () => {
  return (
    <div className={CredentialCSS["credentials-container"]}>
      <MainHeading headingName="Credentials" />
      <h1 className={CredentialCSS["credentials-subHeading"]}>
        Developer Team
      </h1>

      <div className={CredentialCSS["credentials-team"]}>
        {CredentialsData.map((credentials) => {
          return (
            <CredentialsCard
              key={credentials.id}
              img={credentials.img}
              name={credentials.name}
              position={credentials.position}
              facebookLink={credentials.facebookLink}
              githubLink={credentials.githubLink}
              instagramLink={credentials.instagramLink}
              linkedinLink={credentials.linkedinLink}
              gmailLink={credentials.gmailLink}
            />
          );
        })}
      </div>
      <h2 className={CredentialCSS["credentials-subHeading"]}>Tools Used</h2>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>Unplash:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a
            href="https://unsplash.com/images"
            rel="noreferrer"
            target="_blank"
          >
            https://unsplash.com/images
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>
          Font Awesome:
        </div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a
            href="https://fontawesomeicons.com/"
            rel="noreferrer"
            target="_blank"
          >
            https://fontawesomeicons.com/
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>FlatIcon:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a href="https://www.flaticon.com/" rel="noreferrer" target="_blank">
            https://www.flaticon.com/
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>Figma:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a
            href="https://www.figma.com/files/recent?fuid=1070276132950700408"
            rel="noreferrer"
            target="_blank"
          >
            https://www.figma.com/files/recent?fuid=1070276132950700408
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>Swiper Js:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a href="https://swiperjs.com/" rel="noreferrer" target="_blank">
            https://swiperjs.com/
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>Strapi V4:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a href="https://strapi.io/v4" rel="noreferrer" target="_blank">
            https://strapi.io/v4
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>PostgreSQL:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a
            href="https://www.postgresql.org/"
            rel="noreferrer"
            target="_blank"
          >
            https://www.postgresql.org/
          </a>
        </div>
      </div>

      <div className={CredentialCSS["credentials-toolUsed"]}>
        <div className={CredentialCSS["credentials-toolName"]}>React v18:</div>
        <div className={CredentialCSS["credentials-toolLink"]}>
          {" "}
          <a
            href="https://reactjs.org/blog/2022/03/29/react-v18.html"
            rel="noreferrer"
            target="_blank"
          >
            https://reactjs.org/blog/2022/03/29/react-v18.html
          </a>
        </div>
      </div>
    </div>
  );
};
