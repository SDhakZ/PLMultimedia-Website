import React from "react";
import Button from "../Button";
export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button class="primary" btnMessage="Click To Contact" />
      <Button class="secondary" btnMessage="Search" />
      <Button class="tertiary" btnMessage="More works..." />
    </div>
  );
};
