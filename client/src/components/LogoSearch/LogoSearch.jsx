import React from "react";
import Logo from "../../img/newlogo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.scss";

function LogoSearch() {
  return (
    <div className="LogoSearch">
      <img
        src={Logo}
        alt=""
        style={{
          width: "4rem",
          height: "4rem",
        }}
      />
      <div className="Search">
        <input className="Explore" type="text" placeholder="#Explore" />
        <div className="S-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
