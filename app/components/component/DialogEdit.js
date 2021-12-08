import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@mui/material/Switch';

// ensure that all non-react component/classes do not have capitalized letters at the start
const DialogEdit = ({
    openEditRow,
    onClose,
    updateEditedData,
    name,
    setName,
    status,
    setStatus,
    views,
    setViews,
    completion,
    setCompletion,
}) => {
    return (
        <Dialog open={openEditRow} onClose={ onClose }>
        <DialogTitle>Edit Row Data</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    value={name}
                    label="Name"
                    fullWidth
                    variant="standard"
                    onChange={ (e) => setName(e.target.value)}
                />

                <FormGroup>
                    <FormControlLabel 
                    control={<Switch defaultChecked={status} onChange={ () => setStatus(!status)} color="success" />} 
                    label="Status" 
                    labelPlacement="start"
                    />
                </FormGroup>

                <TextField
                    id="views"
                    label="No. of views"
                    value={views}
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={ (e) => setViews(e.target.value)}
                />

                <TextField
                    id="completionRate"
                    label="Completion Rate"
                    value={completion}
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={ (e) => setCompletion(e.target.value)}
                    InputProps={{
                        endAdornment:
                        "%"
                    }}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={ onClose }>Cancel</Button>
                <Button onClick={ () => updateEditedData()}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}
export default DialogEdit;