import React, { Component } from "react";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle "
        style={{ display: "block" }}
        data-ad-client="ca-pub-4968023359843859"
        data-ad-slot={1741764415}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}

export default GoogleAds;
