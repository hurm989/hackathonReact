import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import MYInput from "../../config/components/MYInput";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
export default function Form() {
    const [hotelNAme, setHotelName] = useState("")
    const [rooms, setRooms] = useState("")
    const [days, setDays] = useState("")
    const [extras, setExtras] = useState("")
    const [contactName, setContactName] = useState("")
    const [contact, setContact] = useState("")
    const [image, setImage] = useState("")

    let createHotel = () => {
        // if(hotelNAme=="" || rooms==""){
        //     alert("Enter Hotel Name")
        //     return
        // }
        let obj = {
            hotelNAme,
            rooms,
            days,
            extras,
            contactName,
            contact,
            image
        }
        console.log(obj)
    }

    return <>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
            <Typography variant="h4">
                Add Hotel
            </Typography>
            <Box marginTop={5}>
                <Typography variant="h5">
                    Hotel Details
                </Typography>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                <MYInput onChange={(e) => setHotelName(e.target.value)} type="text" label="Enter Hotel Name" required={true} variant="outlined" />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} sx={{ marginTop: 2 }}>
                <Box>
                    <MYInput onChange={(e) => setRooms(e.target.value)} type="number" label="Enter Rooms" variant="outlined" required={true} />
                </Box>
                <Box>
                    <MYInput onChange={(e) => setDays(e.target.value)} type="number" label="Enter Days" variant="outlined" required={true} />
                </Box>
                <Box>
                    <MYInput onChange={(e) => setExtras(e.target.value)} type="text" label="Extras" variant="outlined" required={true} />
                </Box>
                <Box>
                    <MYInput onChange={(e) => setImage(e.target.value)} type="file" accept="image/*" variant="outlined" required={true} />

                </Box>
            </Box>
            <Box sx={{ marginTop: 5 }}>
                <Box>
                    <Typography variant="h6">
                        Contact
                    </Typography>
                    <Box display={"flex"} sx={{ marginTop: 2, display: "flex" }} >
                        <Box sx={{ marginRight: 10 }}>
                            <MYInput onChange={(e) => setContactName(e.target.value)} type="text" label="Enter Name" />
                        </Box>
                        <Box>
                            <MYInput onChange={(e) => setContact(e.target.value)} type="text" placeholder="03XXXXXXXX" required={true} label="Contact No" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ marginTop: 5, display: "flex", justifyContent: "end" }}>
                <button onClick={createHotel} className="btn btn-primary btn-md">ADD</button>
            </Box>
        </Grid>
    </>
}