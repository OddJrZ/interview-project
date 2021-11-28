import React from "react";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './analytics.css';
import { Container } from "react-bootstrap";

const data = [
    {
        "name": "Google Analytics Onboarding",
        "status": false,
        "views": 51,
        "completion_rate" : 0.2721
    },
    {
        "name": "How to install Google Analytics on your ...",
        "status": true,
        "views": 200,
        "completion_rate" : 0.6301
    },
    {
        "name": "UserTip Demo",
        "status": true,
        "views": 453,
        "completion_rate" : 0.5081
    },
    {
        "name": "How to build a walkthrough",
        "status": true,
        "views": 3357,
        "completion_rate" : 0.9174
    },
    {
        "name": "How to build Hovertips",
        "status": true,
        "views": 567,
        "completion_rate" : 0.7562
    },
    {
        "name": "How to creat a post on LinkedIn",
        "status": false,
        "views": 67,
        "completion_rate" : 0.8722
    },
    {
        "name": "How to add a new connection on LinkedIn",
        "status": true,
        "views": 643,
        "completion_rate" : 0.8008
    },
    {
        "name": "How to expand your network on LinkedIn",
        "status": false,
        "views": 32,
        "completion_rate" : 0.2211
    },
    {
        "name": "How to manage your walkthroughs",
        "status": true,
        "views": 701,
        "completion_rate" : 0.9387
    },
    {
        "name": "How to add users to your organization",
        "status": false,
        "views": 407,
        "completion_rate" : 0.6425
    }
]

function status(item) {
    if (item == false) {
        return <td className="inactive">Inactive</td>
    } 
    else {
        return <td className="active">Live</td>
    }
}

function rate_percentage(item) {
    item = Math.round(item * 100)
    return item
}

const AnalyticsDashboard = () => {
    return (
        <Container className="container">
            <div className="div1">
                </div>

            <div className="div2">
                <h1>Analytics Dashboard</h1>
                <Table className="table">
                    <thead>
                        <tr>
                            <th>Walkthrough Name</th>
                            <th>Status</th>
                            <th>No. of views</th>
                            <th>Completion Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((items) => (
                        <tr>
                            <td>{items.name}</td>
                            {status(items.status)}
                            <td>{items.views}</td>
                            <td>{rate_percentage(items.completion_rate)}%</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

const mapStateToProps = state => {

};

export default connect()(AnalyticsDashboard);
