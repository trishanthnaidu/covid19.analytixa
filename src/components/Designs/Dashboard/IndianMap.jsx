import React, { useEffect, useState, Fragment } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";
import {
      ComposableMap,
      Geographies,
      Geography,
      ZoomableGroup,
} from "react-simple-maps";
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import { scaleQuantile } from "d3-scale";
import { createStore, StoreManager } from "@rootzjs/store";
import { Styles } from '../../../styles/Designs/WorldMap';
import { geoJSONState } from '../../../assets/CSV/GeoJsonIndiaStates';
import IndianCovidData from '../../../assets/CSV/IndiaCases.json';

// const filterMapping = {
//       "Population": "POP_EST",
//       "GDP": "GDP_MD_EST",
//       "GDP per Capita": "GDP_MD_EST"
// }

const domianMapping = {
      "All": [0, 200000000],
      "": [1000, 4000000],
      "GDP per Capita": [0, 0.07],
}

// const domianMappingBi = {
//       "Population": [1000, 100000000, 1500000000],
//       "GDP": [10000, 1000000, 30000000],
//       "GDP per Capita": [0, 0.07],
// }

// const domianMappingHeat = {
//       "Population": [10000, 500000, 7000000, 4000000, 7000000, 10000000, 30000000, 50000000, 100000000, 500000000],
//       "GDP": [50, 30000, 70000, 100000, 200000, 300000, 1000000, 3000000, 10000000, 15000000],
//       "GDP per Capita": [0, 0.07]
// }

export const Maps = ({
      content,
      filterBy = "total_cases",
      options = {
            height: "70vh",
            width: "50vw",
            zoom: 5.5,
            center: [-1, 9]
      },
      onRegionClick,
      stateStyles = {},
}) => {
      const styl = Styles();
      const theme = useTheme();
      const centerConst = [-280, 15];
      const colorScale = scaleLinear()
            .domain([1, 40])
            .range(["#ffe8e5", theme.palette.primary.main]);
      debugger;
      return (
            <div className={styl.root}>
                  <Paper elevation={0} className={styl.paperWorldMap}>
                        <ComposableMap
                              data-tip=""
                              projection="geoMercator"
                              className={styl.projection}
                              style={{
                                    height: options.height,
                                    width: options.width
                              }}
                        >
                              <ZoomableGroup
                                    zoom={options.zoom}
                                    disableZooming={true}
                                    disablePanning={true}
                                    center={[centerConst[0] + options.center[0], centerConst[1] + options.center[1]]}
                              >
                                    <Geographies
                                          geography={geoJSONState}
                                    >
                                          {
                                                ({ geographies }) => (
                                                      <>
                                                            {
                                                                  geographies.map(geo => {
                                                                        const cur = IndianCovidData.find(x => x.state_name.toUpperCase() === geo.properties.name.toUpperCase());
                                                                        const colorFill = colorScale(cur ? cur[filterBy] : 0) || "#AAAAAAE0";
                                                                        const tooltipContent = `${geo.properties.name} - ${!cur || cur[filterBy] === 0 ? 'NA' : cur[filterBy]}`;
                                                                        return (
                                                                              <Geography
                                                                                    geography={geo}
                                                                                    key={geo.rsmKey}
                                                                                    id={'id_' + geo.id}
                                                                                    onClick={onRegionClick}
                                                                                    className={styl.states}
                                                                                    fill={colorFill}
                                                                                    fillBackup={colorFill}
                                                                                    style={stateStyles}
                                                                                    name={geo.properties.name}
                                                                                    onMouseEnter={() => {
                                                                                          StoreManager.update("#MapInsights", {
                                                                                                content: tooltipContent
                                                                                          })
                                                                                    }}
                                                                                    onMouseLeave={() => {
                                                                                          StoreManager.update("#MapInsights", {
                                                                                                content: ""
                                                                                          })
                                                                                    }}
                                                                                    {...stateStyles}
                                                                              />
                                                                        );
                                                                  })
                                                            }
                                                      </>
                                                )
                                          }
                                    </Geographies>
                              </ZoomableGroup>
                        </ComposableMap>
                        <ReactTooltip>{content}</ReactTooltip>
                  </Paper>
            </div>
      )
}

const rounded = num => {
      if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
      } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
      } else {
            return Math.round(num / 100) / 10 + "K";
      }
};


