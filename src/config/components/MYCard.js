import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
export default function MYCard(props) {
    const { hotelName,rooms,days,extras,contactName,contact,image ,discription} = props
    return <>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
            <Box paddingY={1} width={"100%"} paddingX={3} style={{ boxShadow: '1px 1px 1px 1px #white' }}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography variant="h6" fontWeight={"bold"}>{hotelName?`Name : ${hotelName}`:null}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="p"><b>{contactName?contactName:null}</b> {contact?contact:null}</Typography>
                    </Box>
                </Box>
                <Box display={"flex"}>
                    <Box marginRight={2}>
                        <Typography variant="p"><b> {rooms?`Rooms : ${rooms}`:null}</b></Typography>
                    </Box>
                    <Box marginRight={2}>
                        <Typography variant="p"><b>{days?`Days : ${days}`:null}</b></Typography>
                    </Box>
                    <Box marginRight={2}>
                        <Typography variant="p"><b>{extras?`Extras : ${extras}`:null}</b></Typography>
                    </Box>
                </Box>
                <Box marginTop={5} display="flex">
                    <Typography variant="p">{discription?`Discription : ${discription}`:null}</Typography>
                    {/* <img src={image?image:null} /> */}
                </Box>
            </Box>
        </Grid></>
}