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
    const [openAddRow, setOpenAddRow] = useState(false);
    const [openEditRow, setOpenEditRow] = useState(false);

    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    }

    const [dataList, updataData] = useState(data);

    const addData = () => {
        const newDataObj = {
            name: value,
            status: false,
            views: 0,
            completion_rate: 0.0,
        }
        const newData = [...dataList, newDataObj];
        updataData(newData)
        setValue("");
        setOpenAddRow(false);
    };

    // name, setName
    const [NameValue, setName] = useState(null);
    
    //status, setStatus
    const [StatusValue, setStatus] = useState(null);

    const [ViewsValue, setViews] = useState(null);
    const [CompletionValue, setCompletion] = useState(null);
    const [indexValue, setIndex] = useState(null);

    const displayEditData = (items, index) => {
       setOpenEditRow(true);
       setName(items.name);
       setStatus(items.status);
       setViews(items.views);
       setCompletion(items.completion_rate);
       setIndex(index);
    };

    const updateEditedData = () => {
        const newDataObj = {
            name: NameValue,
            status: StatusValue,
            views: ViewsValue,
            completion_rate: CompletionValue,
        }
        const newData = [...dataList];
        newData[indexValue] = newDataObj;
        updataData(newData)
        setOpenEditRow(false);
    };

    const deleteData = (index) => {
        const temp = [...dataList];
        temp.splice(index, 1);
        updataData(temp);
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

                <DialogAddRow 
                    openAddRow={openAddRow}
                    onClose = {() => setOpenAddRow(false)}
                    addData = {addData}
                    handleChange = {handleChange}
                />

                <DialogEdit 
                    openEditRow={openEditRow}
                    onClose = { () => setOpenEditRow(false)}
                    updateEditedData = {updateEditedData}
                    NameValue = {NameValue}
                    setName = {setName}
                    StatusValue = {StatusValue}
                    setStatus = {setStatus}
                    ViewsValue = {ViewsValue}
                    setViews = {setViews}
                    CompletionValue = {CompletionValue}
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
