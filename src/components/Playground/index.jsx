import React, { useEffect } from 'react';
import { Dashboard } from '../Designs/Dashboard/Master';

import { Styles } from '../../styles/Playground';
import { createStore, StoreManager } from '@rootzjs/store';

const ComponentMap = {
      "Collabrate": Dashboard
}

const Component = ({ props, state }) => {
      const styl = Styles();
      const Section = ComponentMap[state.activeSection];
      useEffect(() => {
            const doc = document.getElementById("main-container");
            doc.scrollTop = 0;
      })
      return (
            <main>
                  <div id="main-container" className={styl.root}>
                        <Section />
                  </div>
            </main>
      )
}

export const Playground =
      createStore({
            storeID: "#PlaygroundComponent",
            Component: Component,
            state: {
                  activeSection: StoreManager.getState("#AppDrawerComponent").activeSection
            }
      })