import React from "react";
import TextField from '@mui/material/TextField';
export default function MYInput(props) {
    const { label, variant, onChange, fullWidth,required ,type,placeholder} = props
    return <>
        <TextField type={type} id="outlined-basic" required={required} label={label} fullWidth={fullWidth ? fullWidth : true} onChange={onChange} variant={variant} placeholder={placeholder}/>
    </>
}