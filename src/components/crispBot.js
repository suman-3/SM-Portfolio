import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("d1b39536-a08f-4433-a2aa-5f99f8e3c2b5");
  }

  render() {
    return null;
  }
}
export default CrispChat;
