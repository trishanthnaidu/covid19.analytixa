import React, { useEffect } from 'react';
import {
      Grid,
      Typography,
      ToggleButtonGroup,
      ToggleButton,
      Paper,
      Button,
      Menu,
      MenuItem,
      Divider,
      useTheme,
      ExpandMoreRounded,
      fade
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';
import { SelectButton } from '../../Toolkit/Selects';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsRoundedCorners from 'yarn-highcharts-rounded-corners';
import IndiaCases from '../../../assets/CSV/IndiaCases.json';

import { Styles } from '../../../styles/Designs/Dashboard';

const filterMapping = {
      "Population": "POP_EST",
      "GDP": "GDP_MD_EST",
      "GDP per Capita": "GDP_MD_EST"
}
const rounded = (num, isSmall) => {
      if (!isSmall) {
            if (num > 1000000000) {
                  return Math.round(num / 100000000) / 10 + "Bn";
            } else if (num > 1000000) {
                  return Math.round(num / 100000) / 10 + "M";
            } else {
                  return Math.round(num / 100) / 10 + "K";
            }
      } else {
            return (num * 100).toFixed(2);
      }
};
HighchartsRoundedCorners(Highcharts);
HighchartsMore(Highcharts);
const VerticalBarChart = ({ categories, data }) => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  inverted: true,
                  height: theme.isMobile ? "480px" : "670px",
            },
            colors: ["#7c96f7"],
            xAxis: {
                  visible: true,
                  opposite: true,
                  lineWidth: 0,
                  categories,
                  labels: {
                        style: {
                              color: theme.text[40],
                              fontSize: "12px",
                              fontWeight: "normal",
                              textOutline: "none",
                              textAnchor: "end",

                        },
                        reserveSpace: true,
                        align: "right",
                        x: 0,
                        y: 2
                  },
            },
            yAxis: {
                  visible: false,
                  min: 0,
            },
            legend: {
                  enabled: false
            },
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  formatter: function () {
                        return `<span> ${this.x} <span style="font-weight: bold">: ${this.y}</span></span>`;
                  }
            },
            plotOptions: {
                  series: {
                        pointWidth: 20,
                        pointPadding: 0,
                        groupPadding: 0,
                        borderWidth: 0,
                  },
            },
            series: [
                  {
                        name: "Analytixa",
                        data,
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <Paper elevation={0} className={styl.verticalBarChart}>
                  <HighchartsReact
                        highcharts={Highcharts}
                        options={chartConfig}>
                  </HighchartsReact>
            </Paper>
      )
}

export const TopBottomFilter = createStore({
      storeID: "#TopBottomFilter",
      Component: ({ state }) => {
            let topRegions;
            let bottomRegions;
            let topRegionsData;
            let bottomRegionsData;
            const styl = Styles();
            const onFilterChange = (evt, topBottomBy) => {
                  if (!topBottomBy) return;
                  StoreManager.update("#TopBottomFilter", {
                        topBottomBy
                  })
                  StoreManager.update("#Dashboard", {
                        topBottomBy
                  })
            }

            if (IndiaCases) {
                  const sortedRegions = IndiaCases.sort((a, b) => a[state.filterBy] - b[state.filterBy]);
                  bottomRegions = sortedRegions.slice(0, 20);
                  topRegions = sortedRegions.slice(sortedRegions.length - 20, sortedRegions.length);

                  bottomRegionsData = bottomRegions.map(x => x[state.filterBy]);
                  topRegionsData = topRegions.map(x => x[state.filterBy]).reverse();

                  topRegions = topRegions.map(x => x["state_name"]).reverse();
                  bottomRegions = bottomRegions.map(x => x["state_name"]);
                  debugger;
            }
            return (
                  <Grid item sm={8} md={12} style={{ padding: 0 }}>
                        <Paper elevation={0} className={styl.ƒilterContainer}>
                              <ToggleButtonGroup
                                    className={styl.toggleButtonGroup}
                                    value={state.topBottomBy}
                                    exclusive
                                    onChange={onFilterChange}
                                    aria-label="text alignment"
                              >
                                    <ToggleButton value="Top 20 Regions" aria-label="left aligned">Top 20 Regions
                                    </ToggleButton>
                                    <ToggleButton value="Bottom 20 Regions" aria-label="centered">Bottom 20 Regions
                                    </ToggleButton>
                              </ToggleButtonGroup>
                        </Paper>
                        {
                              IndiaCases &&
                              <VerticalBarChart
                                    categories={state.topBottomBy === "Top 20 Regions" ? topRegions : bottomRegions}
                                    data={state.topBottomBy === "Top 20 Regions" ? topRegionsData : bottomRegionsData}
                              />
                        }
                  </Grid>
            )
      },
      state: {
            topBottomBy: "Top 20 Regions",
      },
      mapAllPropsToState: true
})