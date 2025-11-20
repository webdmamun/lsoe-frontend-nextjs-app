'use client';

import React from "react";
import HubspotForm from "react-hubspot-form";

const IntFormEmbedHub = () => {
  return (
    <div className="container mx-auto p-10">
      <HubspotForm
        region="eu1"
        portalId="143155247"
        formId="96067c08-f7e0-4932-b724-f63bfac36de8"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </div>
  );
};

export default IntFormEmbedHub;
