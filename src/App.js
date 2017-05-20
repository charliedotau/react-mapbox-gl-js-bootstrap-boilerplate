import React, { Component } from 'react';
//import logo from './logo.svg';
import './Map.css';

import MapboxComponent from "./components/mapboxcomponent.js";
import TextComponent from "./components/textcomponent.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isViewingMelbourne: true
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="masthead"> 
            <nav></nav>
          </div>

          <div className="jumbotron">
            <h1>Simple React App</h1>
            <p className="lead">Working with Bootstrap and Mapbox GL JS</p>
          </div>

          <div className="masthead">
            <h3 className="text-muted">Map</h3>
            <div className="row">
              <div className="col-md-12">
              
              <div id="map">
                <MapboxComponent 
                    handleMapBoundsChanged={this.handleMapComponentBoundsChanged.bind(this)}
                />
              </div>

              <TextComponent
                 isMelbourneShowing={this.state.isViewingMelbourne}
              />
              </div>
            </div>
          </div>  
        

          <footer className="footer">
            <p>&copy; 2017</p>
          </footer>

        </div>
      </div>
    );
  }

  handleMapComponentBoundsChanged(isViewingMelbourne) {
    this.setState({
      isViewingMelbourne: isViewingMelbourne
    })
   
  }
}

export default App;
