import React, { useState } from "react";
import { Grid, Typography, Box, Alert } from "@mui/material";
import MYInput from "../../config/components/MYInput";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
export default function Form() {
    const [hotelName, setHotelName] = useState("")
    const [rooms, setRooms] = useState("")
    const [days, setDays] = useState("")
    const [extras, setExtras] = useState("")
    const [contactName, setContactName] = useState("")
    const [contact, setContact] = useState("")
    const [image, setImage] = useState("")
    const [discription, setDiscription] = useState("")
    const [amount, setAmount] = useState("")

    let createHotel = () => {
        let arr = []
        if (!hotelName) {
            arr.push("hotel name is required")
        }
        if (!rooms) {
            arr.push("No of Room is required")
        }
        if (!contact) {
            arr.push("Contact number is required")
        }
        if (!amount) {
            arr.push("Enter Amount")
        }
        if (arr && arr.length > 0) {
            alert(arr)
            return
        }
        let obj = {
            hotelName,
            rooms,
            days,
            extras,
            contactName,
            contact,
            image,
            discription,
            amount
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
                    <MYInput onChange={(e) => setDays(e.target.value)} type="number" label="Enter Days" variant="outlined" />
                </Box>
                <Box>
                    <MYInput onChange={(e) => setExtras(e.target.value)} type="text" label="Extras" variant="outlined" />
                </Box>

                <Box>
                    <MYInput onChange={(e) => setImage(e.target.value)} type="file" accept="image/*" variant="outlined"  />
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
                        <Box  sx={{ marginRight: 10 }}>
                            <MYInput onChange={(e) => setContact(e.target.value)} type="text" placeholder="03XXXXXXXX" required={true} label="Contact No" />
                        </Box>
                        <Box>
                            <MYInput onChange={(e)=>setAmount(e.target.value)} type="text" label="Enter Amount" variant="outlined" required={true} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
                <Box style={{ marginTop: 20 }}>
                    <Typography style={{ marginBottom: 10 }} variant="h6">Discritption</Typography>
                    <textarea onChange={(e) => setDiscription(e.target.value)} placeholder="Discription" style={{ paddingLeft: 7 }} />
                </Box>
            </Grid>
            <Box sx={{ marginTop: 5, display: "flex", justifyContent: "end" }}>
                <button onClick={createHotel} className="btn btn-primary btn-md">ADD</button>
            </Box>
        </Grid>
    </>
}