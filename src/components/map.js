import React from "react"
import Mapbox from "./mapbox.js"

const Map = (props) => {
	return <Mapbox handleMapBoundsChanged={props.mapBoundsChangeHandler} />
}

export default Map