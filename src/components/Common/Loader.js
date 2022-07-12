import React from "react";
import "./style.css";
import Loading from "react-fullscreen-loading";
const Loader = () => {
  return <Loading loading={true} background="#0B0B0B" loaderColor="#FF8A00" />;
};

export default Loader;
