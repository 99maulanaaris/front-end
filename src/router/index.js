import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Navbar} from '../components'
import {Home, Success} from '../Pages'

class index extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/success" component={Success} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default index;