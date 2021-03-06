import React from 'react';
import {
      Grid,
      ToggleButtonGroup,
      ToggleButton,
      Paper,
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';

export const Filter = createStore({
      storeID: "#Filter",
      Component: ({ state }) => {
            const styl = Styles();
            const onFilterChange = (evt, filterBy) => {debugger;
                  if(!filterBy) return;
                  StoreManager.update("#Filter", {
                        filterBy
                  })
                  StoreManager.update("#MapInsights", {
                        filterBy
                  })
                  StoreManager.update("#TopBottomFilter", {
                        filterBy
                  })
                  StoreManager.update("#CaseSharePercentange", {
                        filterBy
                  })
            }
            return (
                  <Grid item sm={6} md={8} style={{ padding: 0 }}>
                        <Paper elevation={0} className={`${styl.ƒilterContainer} ${styl.transparent}`}>
                              <ToggleButtonGroup
                                    className={styl.toggleButtonGroup}
                                    value={state.filterBy}
                                    exclusive
                                    onChange={onFilterChange}
                                    aria-label="text alignment"
                              >
                                    <ToggleButton value="total_cases" aria-label="left aligned">Confirmed
                                    </ToggleButton>
                                    <ToggleButton value="active_cases" aria-label="left aligned">Active
                                    </ToggleButton>
                                    <ToggleButton value="cured_discharged" aria-label="centered">Cured
                                    </ToggleButton>
                                    <ToggleButton value="death" aria-label="centered">Death
                                    </ToggleButton>
                              </ToggleButtonGroup>
                        </Paper>
                  </Grid>
            )
      },
      state: {
            filterBy: "total_cases",
      }
})