import React, { useEffect, useState, Fragment } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";
import {
      ComposableMap,
      Geographies,
      Geography,
      ZoomableGroup,
      Marker
} from "react-simple-maps";
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import { geoCentroid } from "d3-geo";
import { createStore, StoreManager } from "@rootzjs/store";
import { Styles } from '../../../styles/Designs/WorldMap';
import { geoJSONState } from '../../../assets/CSV/GeoJsonIndiaStates';

const labelMaps = {
      "total_cases": "Total Cases",
      "total_confirmed_indian_nationals": "Total Cases - Indian Nationals",
      "total_confirmed_foreign_nationals": "Total Cases - Foreign Nationals",
      "cured_discharged": "Recovered & Discharged",
      "death": "Total Deaths",
}

export const Maps = ({
      content,
      filterBy = "total_cases",
      options = {
            height: "65vh",
            width: "48vw",
            zoom: 5.5,
            center: [-1, 9],
      },
      onRegionClick,
      stateStyles = {},
      data
}) => {
      const styl = Styles();
      const theme = useTheme();
      const centerConst = [-280, 15];
      const totalCaseThreshold = data.reduce((a, b) => a + b["total_cases"], 0) / 20;
      const colorScale = scaleLinear()
            .domain([1, 40])
            .range(["#ffe8e5", theme.palette.primary.main]);

      const TotalCases = () => {
            const totalCases = data.reduce((a, b) => a + b[filterBy], 0)
            return (
                  <div className={styl.totalCasesContainer}>
                        <Typography className={styl.labelTotalCasesHeader} color="inherit">{labelMaps[filterBy]}</Typography>
                        <Typography className={styl.labelTotalCasesText} variant="h6" color="inherit">{totalCases}</Typography>
                  </div>
            )
      }
      debugger;
      return (
            <div className={styl.root}>
                  <Paper elevation={0} className={styl.paperWorldMap}>
                        {theme.isMobile || <TotalCases />}
                        <ComposableMap
                              data-tip=""
                              projection="geoMercator"
                              className={styl.projection}
                              style={{
                                    height: theme.isMobile ? "65vh" : options.height,
                                    width: theme.isMobile ? "91vw" : options.width
                              }}
                        >
                              <ZoomableGroup
                                    zoom={theme.isMobile ? 9.7 : options.zoom}
                                    disableZooming={true}
                                    disablePanning={true}
                                    center={!theme.isMobile ? [centerConst[0] + options.center[0], centerConst[1] + options.center[1]] : [centerConst[0] + 2.5, centerConst[1] + 5]}
                              >
                                    <Geographies
                                          geography={geoJSONState}
                                    >
                                          {
                                                ({ geographies }) => (
                                                      <>
                                                            {
                                                                  geographies.map(geo => {
                                                                        const cur = data.find(x => x.state_name.toUpperCase() === geo.properties.name.toUpperCase());
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
                                                            {
                                                                  geographies.map(geo => {
                                                                        const centroid = geoCentroid(geo);
                                                                        const cur = data.find(x => x.state_name.toUpperCase() === geo.properties.name.toUpperCase());
                                                                        return (
                                                                              <g key={geo.rsmKey + "-name"} className="hello">
                                                                                    {cur &&

                                                                                          <Marker coordinates={centroid}>
                                                                                                <text y="0" fontSize={2} textAnchor="middle" fill={`${cur[filterBy] > totalCaseThreshold ? "#FFF" : "#222"}`}>
                                                                                                      {cur[filterBy]}
                                                                                                </text>
                                                                                          </Marker>
                                                                                    }
                                                                              </g>
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

