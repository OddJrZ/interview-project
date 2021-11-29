import React from "react";
import Table from 'react-bootstrap/Table';
// there should be a master css in the root folder --> later on when a project gets complex it's easier to change
import './single.css'
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";

// should import data from the json files
// only time we put the data in directly is adding dummy data to prototype a component

const data = [
    {
        "id": "12345667",
        "name": "How to create a Walkthrough",
        "times_launched": 2923,
        "unique_launch": 854,
        "completion_rate": 0.4325,
        "unique_completion_rate": 0.7206,
        "dismissal_rate": 0.3711,
        "incomplete_rate": 0.2006,
        "errors_count": 67
    }
]


// can put this function within SingleWalkthroughAnalytics component,
// however if we want to reuse this function for different parts of an app
// we can create a js file with this function and export it
// so we can use it anywhere from the application

function rate_percentage(item) {
    item = Math.round(item * 100)
    return item
}

const SingleWalkthroughAnalytics = () => {

    return (
        <Container className="container">
            <div className="div1">
                </div>
                
        <div className="div2">
            <h1>Singular Walkthrough Analytics</h1>
            <Table className="table">

            {/* in single_anallytics.json this is actually a single object, not an object of arrays */}
            {/* hence data.map is not necessary */}
            {data.map((items) => (
                <tbody>
                    <tr>
                        <th>No.of times walkthrough is launched</th>
                        <td>{items.times_launched}</td>
                    </tr>
                    
                    <tr>
                        <th>No.of times walkthrough is launched (unique users)</th>
                        <td>{items.unique_launch}</td>
                    </tr>
                    <tr>
                        <th>Completion rate</th>
                        <td>{rate_percentage(items.completion_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Completion rate (unique users)</th>
                        <td>{rate_percentage(items.unique_completion_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Dismissal rate</th>
                        <td>{rate_percentage(items.dismissal_rate)}%</td>
                    </tr>
                    <tr>
                        <th>Incomplete walkthrough rate</th>
                        <td>{rate_percentage(items.incomplete_rate)}%</td>
                    </tr>
                    <tr>
                        <th>No.of Errors</th>
                        <td>{items.errors_count}</td>
                    </tr>
                </tbody>
                ))}
            </Table>
        </div>
        </Container>  
    );
};

const mapStateToProps = state => {
};

export default connect()(SingleWalkthroughAnalytics);
