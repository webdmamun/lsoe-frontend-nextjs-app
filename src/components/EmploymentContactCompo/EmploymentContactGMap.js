'use client';

import React from "react";
import {
  GoogleMap,
  LoadScript,
  StreetViewService,
  InfoBox,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 51.548447,
  lng: 0.199388,
};
const onLoad = (streetViewService) => {
  streetViewService.getPanorama(
    {
      location: center,
      radius: 20,
    },
    (data, status) => console.log("StreetViewService results", { data, status })
  );
};

const options = { closeBoxURL: "Close", enableEventPropagation: true };

const onLoad2 = (infoBox) => {
  console.log("infoBox: ", infoBox);
};

const EmploymentContactGMap = ({ google }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-YuM_6SI9H9YvH1_zYsHQ2zeCozW_dmw">
      <GoogleMap mapContainerStyle={containerStyle} zoom={20} center={center}>
        <StreetViewService onLoad={onLoad}> </StreetViewService>
        <InfoBox onLoad={onLoad2} options={options} position={center}>
          <div style={{ backgroundColor: "#F5F5F5", padding: 12 }}>
            <div style={{ fontSize: 16, fontColor: "#08233B" }}>
              LSOE Pvt. Ltd.
              <br />
              5 Station Parade Hornchurch,
              <br /> RM12 5AB
            </div>
          </div>
        </InfoBox>
      </GoogleMap>
    </LoadScript>
  );
};

export default EmploymentContactGMap;
