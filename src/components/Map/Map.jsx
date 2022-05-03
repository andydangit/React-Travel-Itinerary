import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  // fake coordinates until get key from google
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} //Need google map key 
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
