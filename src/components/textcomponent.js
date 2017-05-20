import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class TextComponent extends Component {
	
	/*constructor(props) {
		super(props);      
	} */

	render() {

		var message ="";

		if (this.props.isMelbourneShowing) {
			message = "Melbourne, best city in the world."
		} else {
			message = "Not sure, bit it ain't the best city in the world.";
		}

		return (
			<div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">What city can I see on the map?</h3>
              </div>
              <div className="panel-body">
                <p>{message}</p>
              </div>
          </div>
		);
	}

}

TextComponent.propTypes = {
	isMelbourneShowing: PropTypes.bool.isRequired
}