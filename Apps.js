// Pure component only works with class component not function comp
import React, { Component } from "react";
import FunctionComp from './functional.Comp'

import "./Apps.css";

class Apps extends Component {
  state = {
    val: 1,
  }
  render() {
    return (
      <div className="Apps">
        <header className="Apps-header">

        </header>
      </div>
    );
  }
  }

  // Might be able to only use js files for react when importing ////