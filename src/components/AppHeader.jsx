import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo1.svg';
import { StoreManager } from '@rootzjs/store';
import {
      Switch,
      Brightness3Rounded,
      Brightness7Rounded,
      useTheme,
      SearchRounded,
      TrackChangesRounded,
      InputBase,
      Typography,
      IconButton,
      Toolbar,
      AppBar,
      Tooltip,
      Icon,
      Divider,
      ViewModuleRounded,
      MenuOpenRounded,
      MenuRounded
} from './Core';

import { Styles } from "../styles/AppHeader";

export const AppHeader = ({ route }) => {
      const styl = Styles();
      const theme = useTheme();
      const isLight = theme.theme === "light";
      const onMenuOpen = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: true
            });
      }
      const MobileToolbar = () =>
            <div className={styl.logoContainer}>
                  <Tooltip title={`open filter section`} >
                        <IconButton component="span" className={styl.hamburger}>
                              <MenuRounded onClick={onMenuOpen} />
                        </IconButton>
                  </Tooltip>
            </div>
      const DesktopToolbar = () =>
            <Fragment>
                  <div className={styl.logoContainer}>
                        <IconButton className={styl.iconContainer} disabled>
                              <img className={styl.logo} src={isLight ? logo : logoDark} alt="logo" />
                        </IconButton>
                  </div>
            </Fragment>

      return (
            <div className={styl.root}>
                  <AppBar position="fixed" className={styl.appBar}>
                        <Toolbar variant="dense">
                              {
                                    theme.isMobile ?
                                          <MobileToolbar />
                                          :
                                          <DesktopToolbar />
                              }
                              <Typography className={styl.routeTitle} variant="h6" color="inherit">
                              {route.title} - Covid19
                              </Typography>
                        </Toolbar>
                  </AppBar>
            </div>
      );
}
