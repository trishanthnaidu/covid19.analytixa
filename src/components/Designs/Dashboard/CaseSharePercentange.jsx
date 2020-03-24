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
import HighchartBoost from 'highcharts/modules/boost';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import HighchartVariablePie from 'highcharts/modules/variable-pie';
import HighchartSolidGauge from 'highcharts/modules/solid-gauge';

import { Styles } from '../../../styles/Designs/Dashboard';

HighchartsMore(Highcharts);
HighchartBoost(Highcharts);
HighchartVariablePie(Highcharts);
HighchartSolidGauge(Highcharts);

const GaugeChart = ({ data, caseBy, filterBy }) => {
    const styl = Styles();
    const theme = useTheme();
    const totalCase = data.reduce((a, b) => a + b["total_cases"], 0);
    const totalIndianCase = data.reduce((a, b) => a + b["total_confirmed_indian_nationals"], 0);
    const totalForeignCase = data.reduce((a, b) => a + b["total_confirmed_foreign_nationals"], 0);
    const cured = data.reduce((a, b) => a + b["cured_discharged"], 0);
    const death = data.reduce((a, b) => a + b["death"], 0);
    const chartConfigForPercentage = {
        ...theme.chartConfig,
        chart: {
            ...theme.chartConfig.chart,
            type: "solidgauge",
            height: theme.isMobile ? 375 : 275
        },
        colors: [`${theme.palette.primary.main}40`, `${theme.palette.primary.main}60`, `${theme.palette.primary.main}A0`],
        xAxis: {
            ...theme.chartConfig.xAxis,
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '13px'
            },
            valueSuffix: '%',
            pointFormat: '<span style="color: ' + theme.text[30] + ';font-size:13px;">{series.name}</span><br><span style="font-size:25px; text-align: center; color: ' + theme.palette.primary.main + '">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth / 2) - (labelWidth / 2),
                    y: (this.chart.plotHeight / 2) - (this.label.height / 3)
                };
            }
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '108%',
                innerRadius: '91%',
                backgroundColor: Highcharts.color(`${theme.palette.primary.main}20`)
                    .setOpacity(0.1)
                    .get(),
                borderWidth: 0
            }, {
                outerRadius: '90%',
                innerRadius: '73%',
                backgroundColor: Highcharts.color(`${theme.palette.primary.main}20`)
                    .setOpacity(0.1)
                    .get(),
                borderWidth: 0
            }, {
                outerRadius: '72%',
                innerRadius: '55%',
                backgroundColor: Highcharts.color(`${theme.palette.primary.main}20`)
                    .setOpacity(0.1)
                    .get(),
                borderWidth: 0
            }]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        series: [
            {
                name: "Active",
                data: [{
                    color: `${theme.palette.primary.main}A0`,
                    radius: '108%',
                    innerRadius: '91%',
                    y: Math.round((((totalCase - (cured + death)) / totalCase) * 100)),
                }],
            },
            {
                name: "Cured",
                data: [{
                    color: `${theme.palette.primary.main}80`,
                    radius: '90%',
                    innerRadius: '73%',
                    y: Math.round(((cured / totalCase) * 100)),
                }],
            },
            {
                name: "Death",
                data: [{
                    color: `${theme.palette.primary.main}60`,
                    radius: '72%',
                    innerRadius: '55%',
                    y: Math.round(((death / totalCase) * 100)),
                }],
            },
        ],
    }
    return (
        <Paper elevation={0} className={styl.paperPieChart}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartConfigForPercentage}>
            </HighchartsReact>
        </Paper>
    )
}

const DonutChart = ({ data, caseBy }) => {
    const styl = Styles();
    const theme = useTheme();
    const totalCase = data.reduce((a, b) => a + b["total_cases"], 0);
    const cured = data.reduce((a, b) => a + b["cured_discharged"], 0);
    const death = data.reduce((a, b) => a + b["death"], 0);
    const chartConfigForShare = {
        ...theme.chartConfig,
        chart: {
            ...theme.chartConfig.chart,
            type: "pie",
            height: theme.isMobile ? 375 : 275
        },
        colors: [`${theme.palette.primary.main}40`, `${theme.palette.primary.main}60`, `${theme.palette.primary.main}A0`],
        xAxis: {
            ...theme.chartConfig.xAxis,
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            headerFormat: "",
            pointFormat: '<span style="color: ' + theme.text[30] + ';font-size:13px;">{point.name}</span><br><span style="font-size:25px; text-align: center; color: ' + theme.palette.primary.main + '">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth / 2) - (labelWidth / 2),
                    y: (this.chart.chartHeight / 2) - (this.label.height / 2)
                };
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                minPointSize: 10,
                innerSize: '50%',
                zMin: 0,
                data: [{
                    name: "Active",
                    y: totalCase - (cured + death),
                    selected: true,
                }, {
                    name: "Cured",
                    y: cured,
                }, {
                    name: "Death",
                    y: death,
                }],
            }
        ],
    }
    return (
        <Paper elevation={0} className={styl.paperPieChart}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartConfigForShare}>
            </HighchartsReact>
        </Paper>
    )
}

export const CaseSharePercentange = createStore({
    storeID: "#CaseSharePercentange",
    Component: ({ state }) => {
        const styl = Styles();
        const onFilterChange = (evt, caseBy) => {
            if (!caseBy) return;
            StoreManager.update("#CaseSharePercentange", {
                caseBy
            })
        }
        return (
            <Grid item sm={8} md={12} style={{ padding: 0 }}>
                <Paper elevation={0} className={styl.titleContainer}>
                    <ToggleButtonGroup
                        className={styl.toggleButtonGroup}
                        value={state.caseBy}
                        exclusive
                        onChange={onFilterChange}
                        aria-label="text alignment"
                    >
                        <ToggleButton className={styl.btnToggle} value="Share" aria-label="left aligned">Share
                        </ToggleButton>
                        <ToggleButton className={styl.btnToggle} value="Percent" aria-label="centered">Percent
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Paper>
                {
                    state.data && state.caseBy === "Share" ? <DonutChart {...state} /> : <GaugeChart {...state} />
                }
            </Grid>
        )
    },
    state: {
        caseBy: "Share",
    },
    mapAllPropsToState: true
})