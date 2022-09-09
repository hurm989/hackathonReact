import React, { useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "../assets/bg.png";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")
    let login = () => {
        if (userName == "") {
            alert("Enter Your Name")
            return
        }
        if (password == "" || password.length < 6) {
            alert("Enter Required Password")
            return
        }
        let obj = {
            userName, password,email
        }
        // console.log(obj)
        dispatch({
            type: "DATAFROMLOGIN",
            payload: obj,
          });
        navigate("/")
    }
    return <>
        <Box sx={{ backgroundImage: `url()`, backgroundRepeat: "no-repeat" }} >
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} height={"100vh"} minHeight={"100vh"} className="d-flex justify-content-center align-items-center">
                <Box>
                    <Container sx={{ width: 400 }}>
                        <Box>
                            <Typography className="text-center fw-bold fs-4" variant="h6" >WELCOME BACK</Typography>
                        </Box>
                        <Box sx={{ marginTop: 4 }}>
                            <Input onChange={(e) => setUserName(e.target.value)} fullWidth={true}
                                placeholder="Enter Name" type="text"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                }
                            />
                        </Box>
                        <Box sx={{ marginTop: 4 }}>
                            <Input onChange={(e) => setEmail(e.target.value)} fullWidth={true}
                                placeholder="Enter Email" type="email"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                }
                            />
                        </Box>
                        <Box sx={{ marginTop: 4 }}>
                            <Input onChange={(e) => setPassowrd(e.target.value)} fullWidth={true}
                                placeholder="Enter Password" type="password"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockOpenIcon color="white" />
                                    </InputAdornment>
                                }
                            />
                        </Box>
                        <Box sx={{ marginTop: 2 }}>
                            <Button onClick={login} className="fw-bold" variant="contained" sx={{ letterSpacing: 3 }} fullWidth={true} color="primary">
                                LOG IN
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Grid>
        </Box>
    </>
}