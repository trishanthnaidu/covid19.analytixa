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

import { Styles } from '../../../styles/Designs/Dashboard';

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
            height: theme.isMobile ? "480px" : "220px",
        },
        colors: [theme.palette.primary.main + "80"],
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
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                reserveSpace: true,
                padding: 0,
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
                return `<span style="font-weight: bold;">${this.x} - ${this.y}</span>`;
            }
        },
        plotOptions: {
            series: {
                pointWidth: 12,
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

export const CaseAnalysis = createStore({
    storeID: "#CaseAnalysis",
    Component: ({ state }) => {
        let topRegions;
        let bottomRegions;
        let topRegionsData;
        let bottomRegionsData;
        const styl = Styles();
        return (
            <Grid item sm={8} md={12} style={{ padding: 0 }}>
                <Paper elevation={0} className={styl.titleContainer}>
                    <Typography className={styl.title} variant="h6" color="inherit">
                        Case Analysis
                    </Typography>
                </Paper>
                {
                    state.data &&
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