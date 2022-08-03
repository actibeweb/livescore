import React, { Component } from "react";

class Adsense1 extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle "
        style={{ display: "block" }}
        data-ad-client="ca-pub-4804349496442726"
        data-ad-slot="5823490285"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}

export default Adsense1;
