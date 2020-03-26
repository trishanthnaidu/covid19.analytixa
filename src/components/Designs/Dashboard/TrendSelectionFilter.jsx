import React from 'react';
import {
    Grid,
    ToggleButtonGroup,
    ToggleButton,
    Paper,
    Typography,
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

import { Styles } from '../../../styles/Designs/Dashboard';

export const TrendLineFilter = createStore({
    storeID: "#TrendLineFilter",
    Component: ({ state }) => {
        const styl = Styles();
        const onFilterChange = (evt, trendBy) => {
            if (!trendBy) return;
            StoreManager.update("#TrendLineFilter", {
                trendBy
            })
            StoreManager.update("#TrendAnalysis", {
                trendBy
            })
        }
        const onClose = evt => {
            StoreManager.update("#TrendLineFilter", {
                anchor: null
            })
        }
        const onClick = evt => {
            StoreManager.update("#TrendLineFilter", {
                anchor: evt.currentTarget
            })
        }
        const onFilterSelect = granularity => {
            StoreManager.update("#TrendLineFilter", {
                granularity,
                anchor: null
            });
            StoreManager.update("#TrendAnalysis", {
                granularity,
            });
        }
        const onChecked = evt => {
            StoreManager.update("#TrendLineFilter", {
                checked: evt.target.checked
            })
        }
        return (
            <Grid item sm={6} md={8} style={{ padding: 0 }}>
                <Paper elevation={0} className={`${styl.ƒilterContainer} ${styl.transparent}`}>
                    <ToggleButtonGroup
                        className={`${styl.toggleButtonGroup} ${styl.toggleButtonGroupTrend}`}
                        value={state.trendBy}
                        exclusive
                        onChange={onFilterChange}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="confirmed" aria-label="left aligned">Confirmed
                                    </ToggleButton>
                        <ToggleButton value="cured" aria-label="centered">Cured
                                    </ToggleButton>
                        <ToggleButton value="death" aria-label="centered">Death
                                    </ToggleButton>
                    </ToggleButtonGroup>
                    <Button className={styl.btnTrendGranularitySelection} onClick={onClick} >
                        {state.granularity}
                        <ExpandMoreRounded />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={state.anchor}
                        keepMounted
                        open={Boolean(state.anchor)}
                        onClose={onClose}
                        PopoverClasses={{
                            paper: styl.popover_Paper
                        }}
                    >
                        {
                            ['Daily', 'Progressive'].map(x => {
                                return (
                                    <MenuItem onClick={() => onFilterSelect(x)} >
                                        {x}
                                    </MenuItem>
                                )
                            })
                        }
                    </Menu>
                    {/* <FormControlLabel
                        className={styl.consistentSwitchLabel}
                        value="top"
                        control={<Switch checked={state.checked} color="primary" onClick={onChecked} />}
                        label="Consistent"
                        labelPlacement="left"
                    /> */}
                </Paper>
            </Grid >
        )
    },
    state: {
        anchor: null,
        trendBy: "confirmed",
        checked: false,
        granularity: "Daily"
    }
})