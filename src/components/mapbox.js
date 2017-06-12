
import React, { Component } from "react"
import PropTypes from 'prop-types'
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import turf from "@turf/turf"
//import fred from "@turf/bbox";
//import bboxPolygon from "@turf/bbox-polygon";


export default class Mapbox extends Component {
	
	constructor(props) {
		super(props)
		this.map={}
	        
	}

	componentDidMount() {

		// token from https://www.mapbox.com/mapbox-gl-js/examples/
		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN; 

        this.map = new mapboxgl.Map({
            container: 'map', // container id
    		style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    		center: [144.963055, -37.808725], // starting position
    		zoom: 9 // starting zoom
        });

        var innerThis = this;
        

        innerThis.map.on('moveend', function () {
        	var NE = {};
        	var SW = {};

        	// get the coordinates for the box representing the viewport
        	NE['lat'] = innerThis.map.getBounds()._ne.lat;
        	NE['lng'] = innerThis.map.getBounds()._ne.lng; 
        	SW['lat'] = innerThis.map.getBounds()._sw.lat;
        	SW['lng'] = innerThis.map.getBounds()._sw.lng; 

        	var pt1 = turf.point([NE['lng'], NE['lat']]);
        	var pt2 = turf.point([SW['lng'], SW['lat']]);

        	var features = [pt1, pt2];
        	var fc = turf.featureCollection(features);
        

        	var myBbox = turf.bbox(fc);
			var bboxPolygon = turf.bboxPolygon(myBbox);
       		

       		var melbourne = turf.point([144.974143, -37.814286]);

       		// determine if the point in question is inside the box representing the current viewport
       		var isInside = turf.inside(melbourne, bboxPolygon);

        	innerThis.props.handleMapBoundsChanged(isInside);
        }) 
		
	}

	componentDidupdate() {
		
	}

	render() {
		return (
		 	<div />
		);
	}
}

Mapbox.propTypes = {
	handleMapBoundsChanged: PropTypes.func.isRequired
}

