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
import { TrendLineFilter } from './TrendSelectionFilter';
import { Maps } from './IndianMap';
import { TopBottomFilter } from './TopBottomFilterSelection';
import { TrendAnalysis } from './TrendAnalysisis';
import { CaseSharePercentange } from './CaseSharePercentange';

const DashboardComponent = ({
      state
}) => {
      const styl = Styles();
      return (
            <Fragment>
                  <div className={styl.root} >
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
                              <Grid container className={`${styl.shareContainer} ${styl.caseAnalysisContainer}`}>
                                    <TrendAnalysis {...state} />
                              </Grid>
                        </div>
                        <Grid container className={styl.trendContainer}>
                              <div className={styl.mapContainer}>
                                    <div className={styl.mapFiterContainer}>
                                          <Typography className={styl.title} variant="h6" color="inherit">
                                                Affected Areas
                                          </Typography>
                                    </div>
                                    <TrendLineFilter />
                              </div>
                        </Grid>
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
