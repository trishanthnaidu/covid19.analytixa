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

const DonutChart = ({ totalCase, cured, death }) => {
    const styl = Styles();
    const theme = useTheme();
    const chartConfigForShare = {
        ...theme.chartConfig,
        chart: {
            ...theme.chartConfig.chart,
            type: "pie",
            height: theme.isMobile ? 250 : 275
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
            valueSuffix: '%',
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
                    y: Math.round((((totalCase - (cured + death)) / totalCase) * 100)),
                    selected: true,
                }, {
                    name: "Cured",
                    y: Math.round(((cured / totalCase) * 100)),
                }, {
                    name: "Death",
                    y: Math.round(((death / totalCase) * 100)),
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
        const totalCase = state.data.reduce((a, b) => a + b["total_cases"], 0);
        const activeCase = state.data.reduce((a, b) => a + b["active_cases"], 0);
        const cured = state.data.reduce((a, b) => a + b["cured_discharged"], 0);
        const death = state.data.reduce((a, b) => a + b["death"], 0);
        return (
            <Fragment>
                <DonutChart totalCase={totalCase} cured={cured} death={death} {...state} />
                <div className={styl.percentageContainer}>
                    <div className={styl.percentageRow}>
                        <Typography className={`${styl.percentageColumn} ${styl.percentageNumber}`} variant="h6">
                            {Math.round((((totalCase - (cured + death)) / totalCase) * 100))}%
                        </Typography>
                        <Typography className={`${styl.percentageColumn} ${styl.percentageNumber}`} variant="h6">
                            {Math.round(((cured / totalCase) * 100))}%
                        </Typography>
                        <Typography className={`${styl.percentageColumn} ${styl.percentageNumber}`} variant="h6">
                            {Math.round(((death / totalCase) * 100))}%
                        </Typography>
                    </div>
                    <div className={styl.percentageRow}>
                        <span className={styl.percentageColumn}>
                            Active
                        </span>
                        <span className={styl.percentageColumn}>
                            Cured
                        </span>
                        <span className={styl.percentageColumn}>
                            Death
                        </span>
                    </div>
                </div>
            </Fragment>
        )
    },
    state: {
        caseBy: "Share",
    },
    mapAllPropsToState: true
})