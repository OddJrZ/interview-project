import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { rate_percentage } from "../utils/percentage_utils";

const Status = ({item}) => {
    return !item ? 
        <td className="inactive">Inactive</td>  
        : 
        <td className="active">Live</td>      
}

const DataListRows = ({
    index,
    items,
    deleteData,
    displayEditData,
}) => {
    return <tr key={index}>
        <td>{items.name}</td>
        {/* should be */}
        <Status item={items.status}/>
        {/* (status(items.status) */}
        <td>{items.views}</td>
        <td>{rate_percentage(items.completion_rate)}%</td>
        <td><IconButton onClick={ () => displayEditData(items, index)}><EditIcon></EditIcon></IconButton></td>
        <td><IconButton onClick={ () => deleteData(index)}><DeleteIcon className="deleteicon"></DeleteIcon></IconButton></td>
    </tr>
}
export default DataListRows;