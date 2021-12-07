import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogAddRow = ({
    openAddRow,
    onClose,
    addData,
    handleChange,
}) => {
    return (
        <Dialog open={openAddRow} onClose={onClose}>
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
                            onChange={handleChange}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={ () => addData()}>Next</Button>
                </DialogActions>
        </Dialog>
    )
}
export default DialogAddRow;