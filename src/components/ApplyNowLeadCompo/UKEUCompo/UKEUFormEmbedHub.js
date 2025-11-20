'use client';

import React from "react";
import HubspotForm from "react-hubspot-form";

const UKEUFormEmbedHub = () => {
  return (
    <div className="container mx-auto p-10">
      <HubspotForm
        region="eu1"
        portalId="143155247"
        formId="62cf16f3-4fca-4470-a856-3410dc0f3d22"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </div>
  );
};

export default UKEUFormEmbedHub;
