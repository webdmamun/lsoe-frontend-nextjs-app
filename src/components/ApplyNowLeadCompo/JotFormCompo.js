import React from "react";
import fromFooterCss from "./JorFormCompo.module.css";
const JotFormCompo = () => {
  return (
    <iframe
      id="JotFormIFrame-233604494251454"
      title="Submit you Application"
      allowTransparency="true"
      allowFullScreen="true"
      // className={fromFooterCss.formFooter}
      src="https://form.jotform.com/233604494251454"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        height: "100vh",
        border: "none",
      }}
    ></iframe>
  );
};

export default JotFormCompo;
