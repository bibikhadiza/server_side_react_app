import React from 'react';

const headerDiv = {
  height: "40px",
  backgroundColor: "white",
  postition: "relatve",
  width: "100%",
  borderTop: "solid 2px #3e3e3e"
}

const headerParagraph = {
  marginLeft: "5%",
  marginTop: "2.5%",
  fontWeight: "bold"
}

function Header(){
  return(
    <div style={headerDiv}><p style={headerParagraph}>Latest</p></div>
  )
}

export default Header
