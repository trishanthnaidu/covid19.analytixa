import React from 'react';
import {
    Grid,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
    Paper,
    Button,
    Menu,
    MenuItem,
    ExpandMoreRounded,
    PaletteRounded,
    useTheme,
    fade
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';
import { Styles } from '../../../styles/Designs/Dashboard';

const states = ["India", "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan",
    "Tamil Nadu", "Uttar Pradesh", "Uttaranchal", "West Bengal", "Arunachal Pradesh", "Chandigarh",
    "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Puducherry", "Sikkim", "Tripura", "Andaman and Nicobar"];

export const StateSelection = createStore({
    storeID: "#StateSelection",
    Component: ({ state }) => {
        const styl = Styles();
        const theme = useTheme();

        const onClose = evt => {
            StoreManager.update("#StateSelection", {
                anchor: null
            })
        }
        const onClick = evt => {
            StoreManager.update("#StateSelection", {
                anchor: evt.currentTarget
            })
        }
        const onFilterSelect = country => {
            StoreManager.update("#StateSelection", {
                country,
                anchor: null
            });
        }
        return (
            <Grid item sm={6} md={3} style={{ padding: 0 }}>
                <Paper elevation={0} className={styl.countrySelectionContainer}>
                    <Button className={styl.btnCountrySelection} onClick={onClick} style={{ color: theme.palette.primary.main }}>
                        {state.country}
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
                            states.map(x => {
                                return (
                                    <MenuItem onClick={() => onFilterSelect(x)} >
                                        {x}
                                    </MenuItem>
                                )
                            })
                        }
                    </Menu>
                </Paper>
            </Grid>
        )
    },
    state: {
        anchor: null,
        country: "India"
    }
})