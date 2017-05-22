import PropTypes from 'prop-types'
import React from "react"

const Alert = (props) => {

	switch (props.alertType) {
		case 'Alert':

			return (
				<div className="panel panel-default">	
					<div className="alert alert-danger" role="alert">{props.children}</div>
				</div>
			)
	
		default:

			return (
				<div className="panel panel-default">	
					<div className="alert alert-success" role="alert">{props.children}</div>
				</div>
			)
			

	}

}

export default Alert


Alert.propTypes = {
	alertType: PropTypes.string.isRequired
}