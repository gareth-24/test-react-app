import React from "react";
import ticketsGif from "./../img/help-gif.gif";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsGif} alt="A gif of Kenan Thompson yelling for help" />
    </React.Fragment>
  );
}

export default Header;