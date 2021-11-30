import React, { useState } from "react";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import data from '/data/dashboard.json';
import '/app/app.css'
import { Container } from "react-bootstrap";
import {rate_percentage} from '../../utils/percentage_utils.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

// functions that return divs/DOM or components could be treated as React Functional Components
// so status could be named Status

const Status = ({item}) => {
    return !item ? 
        <td className="inactive">Inactive</td>  
        : 
        <td className="active">Live</td>      
}

// const Status = ({
//     item
// }) => {

//     // should not compare boolean with boolean, because its code redundant
//     // should be if (!item)
//     if (item == false) {
//         return <td className="inactive">Inactive</td>
//     } 
//     else {
//         return <td className="active">Live</td>
//     }

//     // another way to do if else
//     // !item ? -> if condition
//     //  if condition is met : if condition is not met
//     // <td className="inactive">Inactive</td> : return <td className="active">Live</td>

//     return !item ? 
//         <td className="inactive">Inactive</td>  // if condition is met
//         : 
//         <td className="active">Live</td>        // if condition is not met
// }

const AnalyticsDashboard = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const [dataList, updataData] = useState(data);

    const addData = () => {
        const newDataObj = {
            name: "test123",
            status: false,
            views: 0,
            completion_rate: 0.0,
        }
        const newData = [...dataList, newDataObj];
        updataData(newData)
        handleClose();
    }
    
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
                    <IconButton onClick={handleClickOpen}><AddCircleIcon>
                    </AddCircleIcon>
                    </IconButton>
                    </h2>
                </div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Row</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                    Walkthrough Name
                            </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Enter walkthrough name"
                                    fullWidth
                                    variant="standard"
                                />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={addData}>Next</Button>
                        </DialogActions>
                </Dialog>

                <Table className="table">
                    <thead>
                        <tr>
                            <th>Walkthrough Name</th>
                            <th>Status</th>
                            <th>No. of views</th>
                            <th colSpan={2}>Completion Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dataList.map((items, index) => (
                        <tr key={index}>
                            <td>{items.name}</td>
                            {/* should be */}
                            <Status item={items.status}/>
                            {/* (status(items.status) */}
                            <td>{items.views}</td>
                            <td>{rate_percentage(items.completion_rate)}%</td>
                            <td><IconButton onClick={ () => deleteData(index)}><DeleteIcon className="deleteicon"></DeleteIcon></IconButton></td>
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
