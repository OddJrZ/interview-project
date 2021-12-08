import React, { useState } from "react";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import data from '/data/dashboard.json';
import '/app/app.css'
import { Container } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataListRows from "../../component/DataListRows.js";
import DialogAddRow from "../../component/DialogAddRow.js";
import DialogEdit from "../../component/DialogEdit.js";

const AnalyticsDashboard = () => {
    // opening add row modal
    const [openAddRow, setOpenAddRow] = useState(false);

    // opening edit modal
    const [openEditRow, setOpenEditRow] = useState(false);

    const [value, setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    }

    // displaying data list
    const [dataList, setData] = useState(data);

    // adding data into list
    const addData = () => {
        const newDataObj = {
            name: value,
            status: false,
            views: 0,
            completion_rate: 0.0,
        }
        const newData = [...dataList, newDataObj];
        setData(newData)
        setValue("");
        setOpenAddRow(false);
    };

    // name, setName
    const [name, setName] = useState(null);
    const [status, setStatus] = useState(null);
    const [views, setViews] = useState(null);
    const [completion, setCompletion] = useState(null);
    const [index, setIndex] = useState(null);

    // displaying edit modal 
    const displayEditData = (items, index) => {
       setOpenEditRow(true);
       setName(items.name);
       setStatus(items.status);
       setViews(items.views);
       setCompletion(items.completion_rate);
       setIndex(index);
    };

    //updating edited data
    const updateEditedData = () => {
        const newDataObj = {
            name: name,
            status: status,
            views: views,
            completion_rate: completion,
        }
        const newData = [...dataList];
        newData[index] = newDataObj;
        setData(newData)
        setOpenEditRow(false);
    };

    // deleting data
    const deleteData = (index) => {
        const temp = [...dataList];
        temp.splice(index, 1);
        setData(temp);
    };

    return (
        <Container>
            <div className="div1">
                </div>

            <div className="div2">
                <div className="div4">
                    <h1 className="dashboard">Analytics Dashboard</h1>
                    <h2 className="addrow">Add New Row 
                    <IconButton onClick={ () => setOpenAddRow(true)}><AddCircleIcon>
                    </AddCircleIcon>
                    </IconButton>
                    </h2>
                </div>

                {/* Adding Data Rows */}
                <DialogAddRow 
                    openAddRow={openAddRow}
                    onClose = {() => setOpenAddRow(false)}
                    addData = {addData}
                    handleChange = {handleChange}
                />

                {/* Editing Data Rows */}

                {/* make sure that props do not have the first letter capitalized as well */}
                <DialogEdit 
                    openEditRow={openEditRow}
                    onClose = { () => setOpenEditRow(false)}
                    updateEditedData = {updateEditedData}
                    NameValue = {name}
                    setName = {setName}
                    StatusValue = {status}
                    setStatus = {setStatus}
                    ViewsValue = {views}
                    setViews = {setViews}
                    CompletionValue = {completion}
                    setCompletion = {setCompletion}
                />

                <Table className="table">
                    <thead>
                        <tr>
                            <th>Walkthrough Name</th>
                            <th>Status</th>
                            <th>No. of views</th>
                            <th colSpan={3}>Completion Rate</th>
                        </tr>
                    </thead>

                    {/* Listing Data Rows */}
                    <tbody>
                    {dataList.map((items, index) => (
                        <DataListRows 
                            index={index}
                            items={items}
                            deleteData={deleteData}
                            displayEditData={displayEditData}
                        />
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
