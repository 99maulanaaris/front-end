import React, { Component } from 'react';

import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Navbar} from '../components'
import {Home, Success} from '../Pages'

class index extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar/>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/success" component={Success} />
            </Switch>
          </main>
        </BrowserRouter>
    );
  }
}

export default index;