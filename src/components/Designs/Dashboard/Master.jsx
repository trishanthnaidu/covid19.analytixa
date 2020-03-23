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
                                                Regional Impact
                                          </Typography>
                                          <Filter />
                                    </div>
                                    <MapsInsights {...state} />
                              </div>
                        </Grid>
                        <Grid container className={styl.topAndBottomContainer}>
                              <TopBottomFilter {...state} />
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
      state: {
            region: "India",
            type: "MONO_CHOROPLETH",
            filterBy: "total_cases",
            content: "",
            topSelection: "All"
      }
})
