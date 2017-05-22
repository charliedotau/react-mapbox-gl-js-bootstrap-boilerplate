import React from "react";
import PropTypes from 'prop-types';
import Alert from "./alert.js"


const TextPanel = (props) => {
	
	var message ="";
	var alertType = "";

	if (props.isMelbourneShowing) {
		message = "Congrats, you're near Melbourne, best city in the world."
	} else {
		message = "You are no longer near the best city in the world";
		alertType = "Alert";
	}

	return (
		<Alert alertType={alertType}>{message}</Alert>  
	);
	

}

export default TextPanel

TextPanel.propTypes = {
	isMelbourneShowing: PropTypes.bool.isRequired
}