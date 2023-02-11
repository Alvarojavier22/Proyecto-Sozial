import React, { useState } from "react";
import { Technology } from "../component/techology.jsx";
import { Clothing } from "../component/clothing.jsx";
import { Art } from "../component/art.jsx";
import { Link } from "react-router-dom";
import { ProfileNav } from "../component/ProfileNav.jsx";
import { InfoNav } from "../component/InfoNav.jsx";
export const Categories = () => {
  const [content, setContent] = useState(0);
  const contents = [<Clothing />, <Art />, <Technology />];

  function upDateContent(direction) {
    if (direction === -1 && content > 0) {
      setContent(content - 1);
    } else if (direction === 1 && content < contents.length - 1) {
      setContent(content + 1);
    }
  }
  function selectContent(content) {
    setContent(content);
  }
  return (
    <div className="container-fluid">
      <ProfileNav />
      <InfoNav />

      <div className="container content ">
        <div>{contents[content]}</div>
      </div>
    </div>
  );
};
