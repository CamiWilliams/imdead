import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Experiment,
  Variant,
  emitter, experimentDebugger
} from "@marvelapp/react-ab-test";

import Mixpanel from 'mixpanel';

experimentDebugger.enable();
emitter.defineVariants(
  "landingPageExperiment"
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>yo-butt/is-ridic.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            My name is Cami and I like lentils. My pie hole is a lie hole. 
          </a>
        </header>
        <Experiment name="cassidy">
          <Variant name="is">
            <div>a butt</div>
          </Variant>
          <Variant name="has">
            <div>no life</div>
          </Variant>
        </Experiment>
      </div>
    );
  }
}

export default App;

emitter.addWinListener(function(experimentName, variantName) {
  console.log('Variant' + variantName + ' from experiemtn' + experimentName + 'was clicked');

  Mixpanel.tack(experimentName, {
    name: experimentName,
    variant: variantName
  })
});
