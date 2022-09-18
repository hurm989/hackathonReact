import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import MYCard from "../../config/components/MYCard";

export default function AllHotels() {
    return <>
        <h1>All Details</h1>
        <MYCard hotelName="MY ABC" rooms="4" days="5" amount="324789" image="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" discription="asjdhkjasdh sjahd kjahsdjk asdkj asdghajsd hjasdg lag sdlga ldjgajlsdg dgasd" />
    </>
}