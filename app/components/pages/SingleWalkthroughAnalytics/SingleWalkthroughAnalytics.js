import React from "react";
import Table from 'react-bootstrap/Table';
// there should be a master css in the root folder --> later on when a project gets complex it's easier to change
import '/app/app.css'
import data from '/data/single_analytics.json';
import {rate_percentage} from '../../utils/percentage_utils.js';
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";

// can put this function within SingleWalkthroughAnalytics component,
// however if we want to reuse this function for different parts of an app
// we can create a js file with this function and export it
// so we can use it anywhere from the application

const SingleWalkthroughAnalytics = () => {

    return (
        <Container className="container">
            <div className="div1">
                </div>
                
        <div className="div2">
            <h1>Singular Walkthrough Analytics</h1>
            <Table className="table2">

            {/* in single_anallytics.json this is actually a single object, not an object of arrays */}
            {/* hence data.map is not necessary */}
                <tbody>
                    <tr>
                        <th>No.of times walkthrough is launched</th>
                        <td>{data.times_launched}</td>
                    </tr>   
                    <tr>
                        <th>No.of times walkthrough is launched (unique users)</th>
                        <td>{data.unique_launch}</td>
                    </tr>
                    <tr>
                        <th>Completion rate</th>
                        <td>{rate_percentage(data.completion_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Completion rate (unique users)</th>
                        <td>{rate_percentage(data.unique_completion_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Dismissal rate</th>
                        <td>{rate_percentage(data.dismissal_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Incomplete walkthrough rate</th>
                        <td>{rate_percentage(data.incomplete_rate)}%</td>
                    </tr>
                    <tr>
                        <th>No.of Errors</th>
                        <td>{data.errors_count}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </Container>  
    );
};

const mapStateToProps = state => {
};

export default connect()(SingleWalkthroughAnalytics);
