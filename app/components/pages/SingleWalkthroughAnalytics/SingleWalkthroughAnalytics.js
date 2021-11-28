import React from "react";
import Table from 'react-bootstrap/Table';
import './single.css'
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";

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
