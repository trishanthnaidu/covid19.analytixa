import React, { useEffect } from 'react';
import { Dashboard } from '../Designs/Dashboard/Master';

import { Styles } from '../../styles/Playground';
import { createStore, StoreManager } from '@rootzjs/store';

const Component = ({ props, state }) => {
      const styl = Styles();
      useEffect(() => {
            const URL = 'https://www.mohfw.gov.in/';
            fetch(URL)
                  .then(blob => blob.text())
                  .then(data => {
                        let arr = [];
                        const div = document.createElement('div');
                        div.innerHTML = data;
                        const selector = div.querySelector(".content.newtab table");
                        try {
                              [].reduce.call(selector.rows, function (res, row) {
                                    if (row.rowIndex !== 0) {
                                          arr.push({
                                                sr_number: row.cells[0].textContent,
                                                state_name: row.cells[1].textContent,
                                                total_cases: parseInt(row.cells[2].textContent) + parseInt(row.cells[3].textContent),
                                                total_confirmed_indian_nationals: parseInt(row.cells[2].textContent),
                                                total_confirmed_foreign_nationals: parseInt(row.cells[3].textContent),
                                                cured_discharged: parseInt(row.cells[4].textContent),
                                                death: parseInt(row.cells[5].textContent)
                                          })
                                    }
                                    return arr;
                              }, []);
                        } catch (e) {
                              console.log(e);
                        }
                        StoreManager.update("#PlaygroundComponent", {
                              isMounted: true,
                              data: arr
                        })
                  })
                  .catch(e => {
                        debugger;
                        console.log(e);
                        return e;
                  });
      }, [])
      return (
            <main>
                  <div id="main-container" className={styl.root}>
                        {
                              state.isMounted ?
                                    <Dashboard {...state} />
                                    :
                                    <div>Fetching Data</div>
                        }
                  </div>
            </main>
      )
}

export const Playground =
      createStore({
            storeID: "#PlaygroundComponent",
            Component: Component,
            state: {
                  activeSection: StoreManager.getState("#AppDrawerComponent").activeSection,
                  isMounted: false,
                  data: []
            }
      })