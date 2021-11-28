import React, {useCallback, useEffect, useState, Component} from 'react';
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import { connect } from 'react-redux';

import AnalyticsDashboard from "./pages/AnalyticsDashboard/AnalyticsDashboard";
import SingleWalkthroughAnalytics from "./pages/SingleWalkthroughAnalytics/SingleWalkthroughAnalytics";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/analytics/single" component={SingleWalkthroughAnalytics} />
                    <Route path="/analytics" component={AnalyticsDashboard} />
                </Switch>
            </div>
        );
    }
}

export default connect()(App);
