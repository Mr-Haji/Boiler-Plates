import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import logoPic from "../../../Pics/logoPic.png";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';


function CustomAppBar() {
    const navigate = useNavigate()
    return (
        <AppBar sx={{
            bgcolor: '#F1C202', borderRadius: "10px", height: "80px",

        }} position="static">
            <Stack sx={{
                flexDirection: "row",
                justifyContent: "space-between",


            }}>
                <Stack >
                    <Link to={"/dashBoard"}>{<img src={logoPic} alt='Pic' width={200} height={100} />}</Link>
                </Stack>
                <Stack      >
                    <Button
                        onClick={() => { navigate('/regForm') }}
                        sx={{
                            my: 1, color: 'Black', fontSize: "25px", mx: 4,
                            borderRadius: "5px",
                            border: "3px solid Red",
                            ":hover": {
                                backgroundColor: 'red',
                                color: 'White'
                            }


                        }}
                    >
                        DONATE NOW?
                    </Button>



                </Stack>
            </Stack>

        </AppBar>
    );
}
export default CustomAppBar;