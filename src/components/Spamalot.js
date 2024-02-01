/* eslint-disable no-unused-vars */

import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  const spamArray = new Array(500).fill(null);

  return (
    <div id="ex-2">
      {spamArray.map((_, index) => (
        <Spam key={index} />
      ))}
    </div>
  );
};

export default Spamalot;
