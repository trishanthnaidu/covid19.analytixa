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
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { Styles } from '../../../styles/Designs/Dashboard';


export const TopBottomFilter = createStore({
      storeID: "#TopBottomFilter",
      Component: ({ state }) => {
            const styl = Styles();
            const theme = useTheme();
            return (
                  <div className={`${styl.agGridRoot} ag-theme-balham`} >
                        <AgGridReact
                              columnDefs={[
                                    { headerName: "State", field: "state_name", width: 300, cellStyle: { color: theme.text[20] }, sortable: true },
                                    { headerName: "Confirmed", field: "total_cases", cellStyle: { color: theme.text[30] }, sortable: true, sort: 'desc' },
                                    { headerName: "Active", field: "active_cases", width: 175, cellStyle: { color: theme.text[30] }, sortable: true },
                                    { headerName: "Cured", field: "cured_discharged", width: 175, cellStyle: { color: theme.text[30] }, sortable: true },
                                    { headerName: "Death", field: "death", width: 175, cellStyle: { color: theme.text[30] }, sortable: true }
                              ]}
                              rowData={state.data}
                              onGridReady={params => {
                                    params.api.sizeColumnsToFit();
                              }}
                        />
                  </div>
            )
      },
      state: {
            topBottomBy: "Top 20 Regions",
      },
      mapAllPropsToState: true
})