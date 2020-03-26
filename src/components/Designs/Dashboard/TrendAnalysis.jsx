import React, { useEffect, Fragment } from 'react';
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
    fade,
    FormControlLabel,
    Switch
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';
import { SelectButton } from '../../Toolkit/Selects';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsRoundedCorners from 'yarn-highcharts-rounded-corners';

import { Styles } from '../../../styles/Designs/Dashboard';
import { StateSelection } from './StateSelection';

HighchartsRoundedCorners(Highcharts);
HighchartsMore(Highcharts);

const TrendLine = ({ data, trendBy, granularity, checked }) => {
    debugger;
    const styl = Styles();
    const theme = useTheme();
    let dataObj = {
        confirmedDaily: [],
        deathDaily: [],
        curedDaily: [],
        confirmedProgressive: [],
        deathProgressive: [],
        curedProgressive: [],
        date: []
    }
    data.hasOwnProperty("cases_time_series") && data["cases_time_series"].forEach(dt => {
        const dateObj = dt["date"].split(" ");
        dataObj.confirmedDaily.push(parseInt(dt["dailyconfirmed"]))
        dataObj.deathDaily.push(parseInt(dt["dailydeceased"]))
        dataObj.curedDaily.push(parseInt(dt["dailyrecovered"]))
        dataObj.confirmedProgressive.push(parseInt(dt["totalconfirmed"]))
        dataObj.deathProgressive.push(parseInt(dt["totaldeceased"]))
        dataObj.curedProgressive.push(parseInt(dt["totalrecovered"]))
        dataObj.date.push(`${dateObj[0]} ${dateObj[1].substr(0, 3)}`)
    });
    const chartConfigConsistent = {
        ...theme.chartConfig,
        chart: {
            ...theme.chartConfig.chart,
            type: 'areaspline'
        },
        xAxis: {
            ...theme.chartConfig.xAxis,
            categories: dataObj.date
        },
        yAxis: {
            min: 0,
            max: 120,
            title: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: "Analytixa",
                data: dataObj[trendBy + granularity],
                zoneAxis: 'x',
                zones: [{
                    value: 53,
                    dashStyle: 'solid',
                    color: theme.palette.primary.main,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, theme.palette.primary.main],
                            [1, fade(theme.palette.primary.main, 0.3)]
                        ]
                    },
                }, {
                    dashStyle: 'solid',
                    color: theme.palette.secondary.main,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, theme.palette.secondary.main],
                            [1, fade(theme.palette.secondary.main, 0.3)]
                        ]
                    },
                },]
            }
        ],
    }
    const chartConfig = {
        ...theme.chartConfig,
        chart: {
            ...theme.chartConfig.chart,
            type: 'areaspline'
        },
        xAxis: {
            ...theme.chartConfig.xAxis,
            categories: dataObj.date
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: "Analytixa",
                data: dataObj[trendBy + granularity],
                zoneAxis: 'x',
                zones: [{
                    value: 53,
                    dashStyle: 'solid',
                    color: theme.palette.primary.main,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, theme.palette.primary.main],
                            [1, fade(theme.palette.primary.main, 0.3)]
                        ]
                    },
                }, {
                    dashStyle: 'solid',
                    color: theme.palette.secondary.main,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, theme.palette.secondary.main],
                            [1, fade(theme.palette.secondary.main, 0.3)]
                        ]
                    },
                },]
            }
        ],
    }
    useEffect(() => {
        const URL = 'https://api.covid19india.org/data.json';
        fetch(URL)
            .then(blob => blob.json())
            .then(data => {
                try {
                    StoreManager.update("#TrendAnalysis", {
                        data
                    })
                } catch (e) {
                    console.log(e);
                }
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }, [])
    return (
        <div className={styl.root}>
            <Paper elevation={0} className={styl.paperSimpleArea}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={checked ? chartConfigConsistent : chartConfig}>
                </HighchartsReact>
                <div className={styl.trendNote}>*The color change represents, Total Lockdown imposed across the country</div>
            </Paper>
        </div>
    )
}

export const TrendAnalysis = createStore({
    storeID: "#TrendAnalysis",
    Component: ({ state }) => {
        const styl = Styles();
        const theme = useTheme();
        return (
            <Fragment>
                <div className={styl.trendContainer}>
                    <TrendLine {...state} />
                </div>
            </Fragment>)
    },
    state: {
        anchor: null,
        data: {},
        trendBy: "confirmed",
        checked: false,
        granularity: "Progressive"
    },
    mapAllPropsToState: true
})
