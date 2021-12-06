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
import EditIcon from '@mui/icons-material/Edit';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Status = ({item}) => {
    return !item ? 
        <td className="inactive">Inactive</td>  
        : 
        <td className="active">Live</td>      
}

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

    const [NameValue, setName] = useState(null);
    const [StatusValue, setStatus] = useState(null);
    const [ViewsValue, setViews] = useState(null);
    const [CompletionValue, setCompletion] = useState(null);

    const displayEditData = (items) => {
       setOpenEditRow(true);
       setName(items.name);
       setStatus(items.status);
       setViews(items.views);
       setCompletion(items.completion_rate)
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

                <Dialog open={openAddRow} onClose={ () => setOpenAddRow(false)}>
                    <DialogTitle>Add New Row</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                    Walkthrough Name
                            </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    value={value}
                                    label="Enter walkthrough name"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ () => setOpenAddRow(false)}>Cancel</Button>
                            <Button onClick={addData}>Next</Button>
                        </DialogActions>
                </Dialog>

                <Dialog open={openEditRow} onClose={ () => setOpenEditRow(false)}>
                    <DialogTitle>Edit Row Data</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={NameValue}
                                label="Name"
                                fullWidth
                                variant="standard"
                                onChange
                            />

                            <FormGroup>
                                <FormControlLabel 
                                control={<Switch defaultChecked={StatusValue} color="success" />} 
                                label="Status" 
                                labelPlacement="start"
                                />
                            </FormGroup>

                            <TextField
                                id="views"
                                label="No. of views"
                                value={ViewsValue}
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange
                            />

                            <TextField
                                id="completionRate"
                                label="Completion Rate"
                                value={rate_percentage(CompletionValue)}
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange
                                InputProps={{
                                    endAdornment:
                                    "%"
                                }}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ () => setOpenEditRow(false)}>Cancel</Button>
                            <Button onClick={addData}>Next</Button>
                        </DialogActions>
                </Dialog>

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
                        <tr key={index}>
                            <td>{items.name}</td>
                            {/* should be */}
                            <Status item={items.status}/>
                            {/* (status(items.status) */}
                            <td>{items.views}</td>
                            <td>{rate_percentage(items.completion_rate)}%</td>
                            <td><IconButton onClick={ () => displayEditData(items)}><EditIcon></EditIcon></IconButton></td>
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
