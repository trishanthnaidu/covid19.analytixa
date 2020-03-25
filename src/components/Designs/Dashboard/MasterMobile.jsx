import React, { Fragment } from 'react';
import {
    Grid,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Paper,
    Button,
    Menu,
    MenuItem,
    Divider
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';
import { Filter } from './FilterSeletion';
import { Maps } from './IndianMap';
import { TopBottomFilter } from './TopBottomFilterSelection';
import { CaseAnalysis } from './CaseAnalysis';
import { CaseSharePercentange } from './CaseSharePercentange';

const labelMaps = {
    "total_cases": "Confirmed",
    "active_cases": "Active",
    "total_confirmed_indian_nationals": "Total Cases - Indian Nationals",
    "total_confirmed_foreign_nationals": "Total Cases - Foreign Nationals",
    "cured_discharged": "Cured",
    "death": "Death",
}

const DashboardComponent = ({
    state
}) => {
    const styl = Styles();
    const TotalCases = () => {
        const totalCases = state.data.reduce((a, b) => a + b["total_cases"], 0)
        return (
            <div className={styl.totalCasesContainer}>
                <Typography className={styl.quickViewsActiveCases} variant="h6">{totalCases}</Typography>
                <Typography className={styl.labelTotalCasesHeader} >{labelMaps["total_cases"]}</Typography>
            </div>
        )
    }
    const ActiveCases = () => {
        const activeCases = state.data.reduce((a, b) => a + b["active_cases"], 0)
        return (
            <div className={styl.totalCasesContainer}>
                <Typography className={styl.quickViewsActiveCases} variant="h6">{activeCases}</Typography>
                <Typography className={styl.labelTotalCasesHeader} >{labelMaps["active_cases"]}</Typography>
            </div>
        )
    }
    const CuredCases = () => {
        const activeCases = state.data.reduce((a, b) => a + b["cured_discharged"], 0)
        return (
            <div className={styl.totalCasesContainer}>
                <Typography className={styl.quickViewsCuredCases} variant="h6">{activeCases}</Typography>
                <Typography className={styl.labelTotalCasesHeader} >{labelMaps["cured_discharged"]}</Typography>
            </div>
        )
    }
    const DeathCases = () => {
        const activeCases = state.data.reduce((a, b) => a + b["death"], 0)
        return (
            <div className={styl.totalCasesContainer}>
                <Typography className={styl.quickViewsDeceasedCases} variant="h6">{activeCases}</Typography>
                <Typography className={styl.labelTotalCasesHeader} >{labelMaps["death"]}</Typography>
            </div>
        )
    }
    return (
        <Fragment>
            <div className={styl.root} >
                <div className={styl.quickViewsContainer}>
                    <Grid container className={styl.quickViews}>
                        <TotalCases />
                    </Grid>
                    <Grid container className={styl.quickViews}>
                        <ActiveCases />
                    </Grid>
                    <Grid container className={styl.quickViews}>
                        <CuredCases />
                    </Grid>
                    <Grid container className={styl.quickViews}>
                        <DeathCases />
                    </Grid>
                </div>
                <Grid container className={styl.gridContainer}>
                    <div className={styl.mapContainer}>
                        <div className={styl.mapFiterContainer}>
                            <Typography className={styl.title} variant="h6" color="inherit">
                                Affected Areas
                            </Typography>
                            <Filter />
                        </div>
                        <MapsInsights {...state} />
                    </div>
                </Grid>
                <div className={styl.statsticalAnalysisContainer}>
                    <div className={styl.columnContainer}>
                        <Grid container className={styl.topAndBottomContainer}>
                            <TopBottomFilter {...state} />
                        </Grid>
                        <Grid container className={`${styl.shareContainer} ${styl.totalActiveCasesContainer}`}>
                            <CaseSharePercentange {...state} />
                        </Grid>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const Map = ({ state, props }) => <Maps {...state} />

const MapsInsights = createStore({
    storeID: "#MapInsights",
    Component: Map,
    state: {},
    mapAllPropsToState: true
})

export const Dashboard = createStore({
    storeID: "#Dashboard",
    Component: DashboardComponent,
    mapAllPropsToState: true,
    state: {
        region: "India",
        type: "MONO_CHOROPLETH",
        filterBy: "total_cases",
        content: "",
        topSelection: "All"
    }
})
